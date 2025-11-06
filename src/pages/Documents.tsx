import React, { useState, useEffect, useRef } from "react";
import { useAuth } from "../contexts/AuthContext";
import {
  IconFileText,
  IconDownload,
  IconEye,
  IconTrash,
  IconUpload,
  IconFolder,
  IconSearch,
  IconFilter,
  IconX,
  IconCheck,
} from "../components/Icons";
import {
  getPatientDocuments,
  deleteDocument,
  uploadDocument,
  Document as FirebaseDocument,
} from "../services/database-service";

interface Document {
  id: number | string;
  name: string;
  type: string;
  category: string;
  size: string;
  date: string;
  thumbnail?: string;
  url?: string;
  storagePath?: string;
  fileUrl?: string;
}

const Documents = () => {
  const { user, showToast } = useAuth();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [documents, setDocuments] = useState<Document[]>([]);
  const [loading, setLoading] = useState(true);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Fetch documents from Firebase
  useEffect(() => {
    const fetchDocuments = async () => {
      if (!user) return;

      try {
        setLoading(true);
        const data = await getPatientDocuments(user.uid);

        // Transform Firebase data to match our interface
        const transformedData: Document[] = data.map((doc) => ({
          id: doc.id || "",
          name: doc.name,
          type: doc.type || "PDF",
          category: doc.category || "General",
          size: doc.size || "Unknown",
          date: doc.date,
          url: doc.fileUrl || doc.url,
          storagePath: doc.storagePath,
        }));

        setDocuments(transformedData);
      } catch (error) {
        console.error("Error fetching documents:", error);
        showToast("Failed to load documents", "error");
      } finally {
        setLoading(false);
      }
    };

    fetchDocuments();
  }, [user, showToast]);

  const handleDeleteDocument = async (documentId: string | number) => {
    if (!confirm("Are you sure you want to delete this document?")) return;

    try {
      // Find the document to get its storage path
      const doc = documents.find((d) => d.id === documentId);
      if (!doc || !doc.storagePath) {
        showToast("Cannot delete document: storage path not found", "error");
        return;
      }

      await deleteDocument(String(documentId), doc.storagePath);

      // Update local state
      setDocuments(documents.filter((d) => d.id !== documentId));

      showToast("Document deleted successfully", "success");
    } catch (error) {
      console.error("Error deleting document:", error);
      showToast("Failed to delete document", "error");
    }
  };

  const handleDownloadDocument = (doc: Document) => {
    if (doc.url) {
      window.open(doc.url, "_blank");
    } else {
      showToast("Document URL not available", "error");
    }
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Check file size (max 10MB)
      if (file.size > 10 * 1024 * 1024) {
        showToast("File size must be less than 10MB", "error");
        return;
      }
      setSelectedFile(file);
      setShowUploadModal(true);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile || !user) return;

    try {
      setUploading(true);
      setUploadProgress(0);

      // Upload file
      await uploadDocument(user.uid, selectedFile, (progress) => {
        setUploadProgress(progress);
      });

      // Refresh documents list
      const data = await getPatientDocuments(user.uid);
      const transformedData: Document[] = data.map((doc) => ({
        id: doc.id || "",
        name: doc.name,
        type: doc.type || "PDF",
        category: doc.category || "General",
        size: doc.size || "Unknown",
        date: doc.date,
        url: doc.fileUrl || doc.url,
        storagePath: doc.storagePath,
      }));

      setDocuments(transformedData);
      setShowUploadModal(false);
      setSelectedFile(null);
      setUploadProgress(0);
      showToast("Document uploaded successfully! 🎉", "success");
    } catch (error) {
      console.error("Error uploading document:", error);
      showToast("Failed to upload document", "error");
    } finally {
      setUploading(false);
    }
  };

  const cancelUpload = () => {
    setShowUploadModal(false);
    setSelectedFile(null);
    setUploadProgress(0);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  // Get unique categories from documents
  const allCategories = [
    "all",
    ...Array.from(new Set(documents.map((doc) => doc.category))),
  ];

  const categories =
    allCategories.length > 1
      ? allCategories
      : [
          "all",
          "Lab Results",
          "Prescriptions",
          "Treatment Plans",
          "Insurance",
          "Forms",
          "Reports",
        ];

  const filteredDocuments = documents.filter((doc) => {
    const matchesCategory =
      selectedCategory === "all" || doc.category === selectedCategory;
    const matchesSearch = doc.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Calculate real stats
  const labResultsCount = documents.filter(
    (doc) => doc.category === "Lab Results"
  ).length;
  const prescriptionsCount = documents.filter(
    (doc) => doc.category === "Prescriptions"
  ).length;

  // Calculate storage used (assuming size is in format "XX KB" or "XX MB")
  const totalStorageMB = documents.reduce((total, doc) => {
    const sizeMatch = doc.size.match(/([\d.]+)\s*(KB|MB)/i);
    if (sizeMatch) {
      const value = parseFloat(sizeMatch[1]);
      const unit = sizeMatch[2].toUpperCase();
      return total + (unit === "MB" ? value : value / 1024);
    }
    return total;
  }, 0);

  const storageUsed =
    totalStorageMB < 1
      ? `${(totalStorageMB * 1024).toFixed(1)} KB`
      : `${totalStorageMB.toFixed(1)} MB`;

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      "Lab Results": "from-blue-500 to-cyan-600",
      Prescriptions: "from-green-500 to-emerald-600",
      "Treatment Plans": "from-purple-500 to-violet-600",
      Insurance: "from-orange-500 to-amber-600",
      Forms: "from-pink-500 to-rose-600",
      Reports: "from-indigo-500 to-blue-600",
    };
    return colors[category] || "from-gray-500 to-slate-600";
  };

  const getFileIcon = (type: string) => {
    return <IconFileText className="w-8 h-8 text-white" />;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-brand-light via-white to-brand-light/50 p-8 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-brand-teal border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Loading documents...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-light via-white to-brand-light/50 p-8">
      {/* Header */}
      <div className="mb-8 animate-fade-in-down">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-brand-teal via-brand-dark to-brand-teal bg-clip-text text-transparent mb-2 animate-gradient-x">
              Documents
            </h1>
            <p className="text-gray-600 text-lg">
              Access and manage your medical documents
            </p>
          </div>
          <button
            onClick={() => fileInputRef.current?.click()}
            className="bg-gradient-to-r from-brand-yellow to-orange-400 hover:from-orange-400 hover:to-brand-yellow text-brand-dark px-6 py-3 rounded-xl font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2 animate-scale-in"
          >
            <IconUpload className="w-5 h-5" />
            Upload Document
          </button>
          <input
            ref={fileInputRef}
            type="file"
            onChange={handleFileSelect}
            className="hidden"
            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.gif"
          />
        </div>

        {/* Search and Filter Bar */}
        <div
          className="flex gap-4 animate-slide-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          <div className="flex-1 relative">
            <IconSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search documents..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-brand-teal outline-none transition-all duration-300 shadow-sm hover:shadow-md"
            />
          </div>
          <button className="p-3 bg-white rounded-xl shadow hover:shadow-lg transition-all duration-300 transform hover:scale-105 border-2 border-gray-200">
            <IconFilter className="w-6 h-6 text-brand-teal" />
          </button>
        </div>
      </div>

      {/* Category Tabs */}
      <div
        className="mb-8 overflow-x-auto animate-slide-in-up"
        style={{ animationDelay: "0.2s" }}
      >
        <div className="flex gap-3 min-w-max pb-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 whitespace-nowrap ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-brand-teal to-brand-dark text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-50 shadow"
              }`}
            >
              {category === "all" ? "All Documents" : category}
            </button>
          ))}
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {[
          {
            label: "Total Documents",
            count: documents.length,
            icon: IconFileText,
            color: "from-blue-500 to-cyan-600",
            delay: "0.3s",
          },
          {
            label: "Lab Results",
            count: labResultsCount,
            icon: IconFileText,
            color: "from-green-500 to-emerald-600",
            delay: "0.4s",
          },
          {
            label: "Prescriptions",
            count: prescriptionsCount,
            icon: IconFileText,
            color: "from-purple-500 to-violet-600",
            delay: "0.5s",
          },
          {
            label: "Storage Used",
            count: storageUsed,
            icon: IconFolder,
            color: "from-orange-500 to-amber-600",
            delay: "0.6s",
          },
        ].map((stat) => (
          <div
            key={stat.label}
            className="bg-white rounded-2xl p-5 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-fade-in-up"
            style={{ animationDelay: stat.delay }}
          >
            <div
              className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-3 animate-pulse-glow`}
            >
              <stat.icon className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-gray-800 mb-1">
              {typeof stat.count === "number" ? stat.count : stat.count}
            </div>
            <div className="text-gray-600 text-sm font-medium">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Documents Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDocuments.map((doc, index) => (
          <div
            key={doc.id}
            className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] animate-slide-in-up"
            style={{ animationDelay: `${0.7 + index * 0.1}s` }}
          >
            {/* Document Preview */}
            <div
              className={`h-48 bg-gradient-to-br ${getCategoryColor(
                doc.category
              )} flex items-center justify-center relative overflow-hidden`}
            >
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-300" />
              {getFileIcon(doc.type)}
              <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-800">
                {doc.type}
              </div>
            </div>

            <div className="p-5">
              {/* Document Info */}
              <div className="mb-4">
                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-brand-teal transition-colors duration-300 line-clamp-2">
                  {doc.name}
                </h3>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span
                    className={`px-2 py-1 rounded-lg bg-gradient-to-r ${getCategoryColor(
                      doc.category
                    )} text-white text-xs font-semibold`}
                  >
                    {doc.category}
                  </span>
                  <span>{doc.size}</span>
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  {new Date(doc.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <button
                  onClick={() => handleDownloadDocument(doc)}
                  className="flex-1 bg-gradient-to-r from-brand-teal to-brand-dark text-white py-2 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <IconEye className="w-4 h-4" />
                  View
                </button>
                <button
                  onClick={() => handleDownloadDocument(doc)}
                  className="p-2 bg-brand-light text-brand-teal rounded-lg hover:bg-brand-teal hover:text-white transform hover:scale-110 transition-all duration-300"
                >
                  <IconDownload className="w-5 h-5" />
                </button>
                <button
                  onClick={() => handleDeleteDocument(doc.id)}
                  className="p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transform hover:scale-110 transition-all duration-300"
                >
                  <IconTrash className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredDocuments.length === 0 && (
        <div className="text-center py-16 animate-fade-in">
          <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-brand-teal to-brand-dark rounded-full flex items-center justify-center animate-float">
            <IconFileText className="w-12 h-12 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            No documents found
          </h3>
          <p className="text-gray-600 mb-6">
            {searchQuery
              ? `No documents match "${searchQuery}"`
              : selectedCategory === "all"
              ? "Upload your first document to get started."
              : `No documents in ${selectedCategory}.`}
          </p>
          <button
            onClick={() => fileInputRef.current?.click()}
            className="bg-gradient-to-r from-brand-yellow to-orange-400 hover:from-orange-400 hover:to-brand-yellow text-brand-dark px-8 py-3 rounded-xl font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Upload Document
          </button>
        </div>
      )}

      {/* Upload Modal */}
      {showUploadModal && selectedFile && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 animate-fade-in p-4">
          <div className="bg-white rounded-2xl max-w-md w-full mx-4 shadow-2xl animate-scale-in">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-brand-teal to-brand-dark p-6 rounded-t-2xl">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-1">
                    Upload Document
                  </h2>
                  <p className="text-brand-yellow text-sm">
                    Uploading to your medical records
                  </p>
                </div>
                {!uploading && (
                  <button
                    onClick={cancelUpload}
                    className="text-white hover:text-brand-yellow transition-colors p-2 hover:bg-white/10 rounded-lg"
                  >
                    <IconX className="w-6 h-6" />
                  </button>
                )}
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              {/* File Info */}
              <div className="mb-6 p-4 bg-brand-light rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-brand-teal to-brand-dark flex items-center justify-center flex-shrink-0">
                    <IconFileText className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-gray-800 truncate">
                      {selectedFile.name}
                    </p>
                    <p className="text-sm text-gray-600">
                      {(selectedFile.size / 1024).toFixed(2)} KB
                    </p>
                  </div>
                </div>
              </div>

              {/* Upload Progress */}
              {uploading && (
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-gray-700">
                      Uploading...
                    </span>
                    <span className="text-sm font-semibold text-brand-teal">
                      {uploadProgress}%
                    </span>
                  </div>
                  <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-brand-teal to-brand-dark transition-all duration-300 rounded-full"
                      style={{ width: `${uploadProgress}%` }}
                    ></div>
                  </div>
                </div>
              )}

              {/* Info Box */}
              <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-4 mb-6">
                <div className="flex gap-3">
                  <IconFileText className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-blue-800">
                    <p className="font-semibold mb-1">Important:</p>
                    <ul className="space-y-1 list-disc list-inside text-xs">
                      <li>Maximum file size: 10MB</li>
                      <li>Supported formats: PDF, DOC, DOCX, JPG, PNG</li>
                      <li>Documents are securely encrypted</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={cancelUpload}
                  disabled={uploading}
                  className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Cancel
                </button>
                <button
                  onClick={handleUpload}
                  disabled={uploading}
                  className="flex-1 bg-gradient-to-r from-brand-teal to-brand-dark text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
                >
                  {uploading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Uploading...</span>
                    </>
                  ) : (
                    <>
                      <IconCheck className="w-5 h-5" />
                      <span>Upload</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Documents;
