import React, { useState, useRef, useEffect } from "react";
import {
  IconSend,
  IconPaperclip,
  IconUser,
  IconPhone,
  IconVideo,
  IconMoreVertical,
  IconSmile,
  IconCheck,
} from "../components/Icons";
import { useAuth } from "../contexts/AuthContext";
import {
  getOrCreateChat,
  getChatMessages,
  sendMessage,
  subscribeToMessages,
  markMessagesAsRead,
  Message as FirebaseMessage,
} from "../services/database-service";

interface Message {
  id: string;
  sender: "user" | "support" | "doctor";
  text: string;
  timestamp: string;
  read: boolean;
  senderName?: string;
}

const Chat = () => {
  const { user, showToast } = useAuth();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [chatId, setChatId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Real contact info (Support Team)
  const supportContact = {
    name: "Dermaglare Support",
    role: "Customer Support",
    avatar: "DS",
    online: true,
  };

  // Initialize chat and fetch messages
  useEffect(() => {
    const initializeChat = async () => {
      if (!user?.uid) return;

      try {
        setLoading(true);
        // Get or create chat for this patient
        const chatIdResult = await getOrCreateChat(
          user.uid,
          user.displayName || user.email || "Patient"
        );
        setChatId(chatIdResult);

        // Fetch initial messages
        const fetchedMessages = await getChatMessages(chatIdResult);

        // Transform Firebase messages to UI format
        const transformedMessages: Message[] = fetchedMessages.map(
          (msg: any) => {
            // Determine sender type
            let senderType: "user" | "support" | "doctor" = "support";
            let senderName = "";

            if (msg.senderId === user.uid) {
              senderType = "user";
            } else if (
              msg.senderRole === "doctor" ||
              msg.senderId === "doctor" ||
              msg.senderName?.toLowerCase().includes("dr")
            ) {
              senderType = "doctor";
              senderName = msg.senderName || "Dr. Jabu Nkehli";
            } else {
              senderType = "support";
              senderName = msg.senderName || "Support Team";
            }

            return {
              id: msg.id || "",
              sender: senderType,
              text: msg.text,
              timestamp: formatTimestamp(msg.timestamp),
              read: msg.read || false,
              senderName: senderName,
            };
          }
        );

        setMessages(transformedMessages);

        // Mark messages as read
        if (fetchedMessages.length > 0) {
          await markMessagesAsRead(chatIdResult);
        }

        setLoading(false);
      } catch (error) {
        console.error("Error initializing chat:", error);
        showToast("Failed to load chat", "error");
        setLoading(false);
      }
    };

    initializeChat();
  }, [user]);

  // Subscribe to real-time messages
  useEffect(() => {
    if (!chatId || !user?.uid) return;

    const unsubscribe = subscribeToMessages(chatId, (fetchedMessages) => {
      const transformedMessages: Message[] = fetchedMessages.map((msg: any) => {
        // Determine sender type
        let senderType: "user" | "support" | "doctor" = "support";
        let senderName = "";

        if (msg.senderId === user.uid) {
          senderType = "user";
        } else if (
          msg.senderRole === "doctor" ||
          msg.senderId === "doctor" ||
          msg.senderName?.toLowerCase().includes("dr")
        ) {
          senderType = "doctor";
          senderName = msg.senderName || "Dr. Jabu Nkehli";
        } else {
          senderType = "support";
          senderName = msg.senderName || "Support Team";
        }

        return {
          id: msg.id || "",
          sender: senderType,
          text: msg.text,
          timestamp: formatTimestamp(msg.timestamp),
          read: msg.read || false,
          senderName: senderName,
        };
      });

      setMessages(transformedMessages);
    });

    return () => unsubscribe();
  }, [chatId, user]);

  // Helper function to format timestamp
  const formatTimestamp = (timestamp: any): string => {
    if (!timestamp) return "";

    let date: Date;
    if (timestamp.toDate) {
      date = timestamp.toDate();
    } else if (timestamp.seconds) {
      date = new Date(timestamp.seconds * 1000);
    } else {
      date = new Date(timestamp);
    }

    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || !chatId || !user?.uid || sending) return;

    const messageText = message.trim();

    try {
      setSending(true);
      // Clear input immediately for better UX
      setMessage("");

      // Send message to Firebase with sender name for notifications
      const senderName =
        user.displayName || user.email?.split("@")[0] || "Patient";
      await sendMessage(chatId, user.uid, messageText, senderName);

      // Scroll to bottom
      scrollToBottom();
    } catch (error) {
      console.error("Error sending message:", error);
      showToast("Failed to send message", "error");
      // Restore message on error
      setMessage(messageText);
    } finally {
      setSending(false);
    }
  };

  // Handle Enter key to send message
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage(e as any);
    }
  };

  return (
    <div className="h-screen bg-gradient-to-br from-brand-light via-white to-brand-light/50 p-8 flex flex-col">
      {/* Header */}
      <div className="mb-6 animate-fade-in-down">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-brand-teal via-brand-dark to-brand-teal bg-clip-text text-transparent mb-2 animate-gradient-x">
          Messages
        </h1>
        <p className="text-gray-600 text-lg">
          Connect with your healthcare providers
        </p>
      </div>

      {/* Chat Container */}
      <div className="flex-1 flex flex-col overflow-hidden animate-slide-in-up">
        {/* Chat Area */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col h-full">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-brand-teal to-brand-dark p-4 flex items-center justify-between animate-slide-in-down">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-brand-teal font-bold">
                  {supportContact.avatar}
                </div>
                {supportContact.online && (
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-white animate-pulse-glow" />
                )}
              </div>
              <div>
                <h3 className="font-semibold text-white">
                  {supportContact.name}
                </h3>
                <p className="text-xs text-brand-yellow">
                  {supportContact.online ? "Online" : "Offline"} •{" "}
                  {supportContact.role}
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300 transform hover:scale-110">
                <IconPhone className="w-5 h-5 text-white" />
              </button>
              <button className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300 transform hover:scale-110">
                <IconVideo className="w-5 h-5 text-white" />
              </button>
              <button className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300 transform hover:scale-110">
                <IconMoreVertical className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gradient-to-b from-brand-light/20 to-white">
            {loading ? (
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-brand-teal mb-4"></div>
                  <p className="text-gray-600">Loading messages...</p>
                </div>
              </div>
            ) : messages.length === 0 ? (
              <div className="flex items-center justify-center h-full">
                <div className="text-center animate-fade-in">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-brand-teal to-brand-dark rounded-full flex items-center justify-center animate-float">
                    <IconSend className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Start the conversation
                  </h3>
                  <p className="text-gray-500">
                    Send a message to {supportContact.name}
                  </p>
                </div>
              </div>
            ) : (
              messages.map((msg, index) => (
                <div
                  key={msg.id}
                  className={`flex ${
                    msg.sender === "user" ? "justify-end" : "justify-start"
                  } animate-slide-in-up`}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="max-w-[70%]">
                    {/* Doctor Badge - Only for doctor messages */}
                    {msg.sender === "doctor" && (
                      <div className="flex items-center gap-2 mb-2 ml-2">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center text-white text-xs font-bold">
                          JN
                        </div>
                        <span className="text-xs font-semibold text-purple-600 bg-purple-50 px-2 py-1 rounded-full">
                          {msg.senderName || "Dr. Jabu Nkehli"}
                        </span>
                      </div>
                    )}

                    {/* Support Badge - Only for support messages */}
                    {msg.sender === "support" && (
                      <div className="flex items-center gap-2 mb-2 ml-2">
                        <span className="text-xs font-semibold text-gray-600 bg-gray-100 px-2 py-1 rounded-full">
                          {msg.senderName || "Support Team"}
                        </span>
                      </div>
                    )}

                    <div
                      className={`${
                        msg.sender === "user"
                          ? "bg-gradient-to-br from-brand-teal to-brand-dark text-white"
                          : msg.sender === "doctor"
                          ? "bg-gradient-to-br from-purple-500 to-violet-600 text-white border-2 border-purple-300"
                          : "bg-white shadow-md"
                      } rounded-2xl p-4 transform hover:scale-[1.02] transition-all duration-300`}
                    >
                      <p
                        className={`mb-2 ${
                          msg.sender === "user" || msg.sender === "doctor"
                            ? "text-white"
                            : "text-gray-800"
                        }`}
                      >
                        {msg.text}
                      </p>
                      <div className="flex items-center justify-between gap-2">
                        <span
                          className={`text-xs ${
                            msg.sender === "user"
                              ? "text-brand-yellow"
                              : msg.sender === "doctor"
                              ? "text-purple-200"
                              : "text-gray-500"
                          }`}
                        >
                          {msg.timestamp}
                        </span>
                        {msg.sender === "user" && (
                          <IconCheck
                            className={`w-4 h-4 ${
                              msg.read ? "text-brand-yellow" : "text-white/50"
                            }`}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}

            {/* Sending indicator */}
            {sending && (
              <div className="flex justify-end animate-fade-in">
                <div className="max-w-[70%] bg-gradient-to-br from-brand-teal/50 to-brand-dark/50 text-white rounded-2xl p-4">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                      <div
                        className="w-2 h-2 bg-white rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-white rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                    </div>
                    <span className="text-xs text-brand-yellow">
                      Sending...
                    </span>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form
            onSubmit={handleSendMessage}
            className="p-4 border-t border-gray-200 bg-white"
          >
            <div className="flex items-center gap-3">
              <button
                type="button"
                className="p-2 text-brand-teal hover:bg-brand-light rounded-lg transition-all duration-300 transform hover:scale-110"
              >
                <IconPaperclip className="w-5 h-5" />
              </button>
              <button
                type="button"
                className="p-2 text-brand-teal hover:bg-brand-light rounded-lg transition-all duration-300 transform hover:scale-110"
              >
                <IconSmile className="w-5 h-5" />
              </button>
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                disabled={sending}
                className="flex-1 px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-brand-teal outline-none transition-all duration-300 disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={!message.trim() || sending}
                className="bg-gradient-to-r from-brand-teal to-brand-dark text-white p-3 rounded-xl hover:shadow-lg transform hover:scale-110 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center min-w-[48px]"
              >
                {sending ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <IconSend className="w-5 h-5" />
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chat;
