"use client";

import React, { useState, useMemo, useEffect } from "react";
import Footer from "../components/Footer";
import { Header } from "../components/Header";
import { SpeakerSubmission } from "../../utils/types";
import { FiUser, FiCalendar, FiClock, FiMapPin, FiFilter, FiSearch, FiExternalLink, FiLinkedin, FiGithub, FiTwitter } from "react-icons/fi";
import { sessions, speakerSubmissions } from "@/utils/sessionDetails";
// import Image from "next/image";


const mappedSpeakerSubmissions: SpeakerSubmission[] = speakerSubmissions.map(speaker => {
  const match = sessions.find(sess => sess.speaker.trim().toLowerCase() === speaker.fullName.trim().toLowerCase());
  return {
    ...speaker,
    sessionTitle: match ? match.title : speaker.sessionTitle,
    titleRole: match ? match.title : speaker.titleRole,
  };
});

export default function SpeakersSchedulePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSessionType, setSelectedSessionType] = useState("");
  const [selectedAudience, setSelectedAudience] = useState("");
  const [selectedSpeaker, setSelectedSpeaker] = useState<SpeakerSubmission | null>(null);
  const [apiSpeakers, setApiSpeakers] = useState<any[]>([]);
  const [updatedSpeakerSubmissions, setUpdatedSpeakerSubmissions] = useState<SpeakerSubmission[]>(mappedSpeakerSubmissions);
  const [isLoadingApiData, setIsLoadingApiData] = useState(true);

  const fetchSpeakers = async () => { 
    try {
      const res = await fetch("/api/speakers");
      if (!res.ok) throw new Error("Failed to fetch speakers");
      const data = await res.json();
      setApiSpeakers(data);
      
      // Update speaker submissions with API profile photos
      const updatedSubmissions = updatedSpeakerSubmissions.map(submission => {
        const matchingApiSpeaker = data.find((apiSpeaker: any) => 
          apiSpeaker.fullname.toLowerCase().trim() === submission.fullName.toLowerCase().trim()
        );
        
        if (matchingApiSpeaker) {
          // console.log(`✅ Matched: ${submission.fullName} -> ${matchingApiSpeaker.speaker_image}`);
          return {
            ...submission,
            profilePhoto: matchingApiSpeaker.speaker_image
          };
        } else {
          // console.log(`❌ No match found for: ${submission.fullName}`);
        }
        
        return submission;
      });
      
      setUpdatedSpeakerSubmissions(updatedSubmissions);
    } catch (error) {
      console.error("Error fetching speakers:", error);
    } finally {
      setIsLoadingApiData(false);
    }
  };

  useEffect(() => {
    fetchSpeakers();
  }, []);
  // Get unique values for filters
  const sessionTypes = useMemo(() => {
    const types = updatedSpeakerSubmissions.map(s => s.sessionType).filter(Boolean);
    return Array.from(new Set(types));
  }, [updatedSpeakerSubmissions]);


  // Filter speakers based on search and filters
  const filteredSpeakers = useMemo(() => {
    return updatedSpeakerSubmissions.filter(speaker => {
      const matchesSearch = searchTerm === "" || 
        speaker.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        speaker.sessionTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
        speaker.titleRole.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesSessionType = selectedSessionType === "" || speaker.sessionType === selectedSessionType;


      return matchesSearch && matchesSessionType
    });
  }, [updatedSpeakerSubmissions, searchTerm, selectedSessionType]);

  const getSocialIcon = (url: string) => {
    if (url.includes('linkedin')) return <FiLinkedin className="w-4 h-4" />;
    if (url.includes('github')) return <FiGithub className="w-4 h-4" />;
    if (url.includes('twitter') || url.includes('x.com')) return <FiTwitter className="w-4 h-4" />;
    return <FiExternalLink className="w-4 h-4" />;
  };

  const getSessionTypeColor = (type: string) => {
    if (type.includes('Lightning')) return 'bg-yellow-500';
    if (type.includes('Technical Deep Dive')) return 'bg-blue-500';
    if (type.includes('Case Study')) return 'bg-green-500';
    return 'bg-purple-500';
  };

  return (
    <>
      <Header />
      <div className="min-h-screen py-10 px-6 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-center text-4xl font-bold text-yellow-500 border-b-2 border-yellow-500 mb-8 pb-3">
            Speaker Submissions & Schedule
          </h1>

          {/* Filters and Search */}
            <div className="mb-8 bg-slate-800/50 backdrop-blur-sm rounded-lg p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-grow relative">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search speakers, sessions, or roles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              </div>
              
              <select
              value={selectedSessionType}
              onChange={(e) => setSelectedSessionType(e.target.value)}
              className="w-full md:w-auto px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
              <option value="">All Session Types</option>
              {sessionTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
              </select>
            </div>
            </div>

          {/* Results count */}
          <div className="mb-6">
            <p className="text-slate-300">
              Showing {filteredSpeakers.length} of {updatedSpeakerSubmissions.length} speaker submissions
              {isLoadingApiData && (
                <span className="ml-2 text-yellow-400 text-sm">(Updating profile photos...)</span>
              )}
            </p>
          </div>

          {/* Speaker Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSpeakers.map((speaker) => (
              <div
                key={speaker.id}
                className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 hover:bg-slate-800/70 transition-all duration-300 cursor-pointer border border-slate-700 hover:border-yellow-500/50"
                onClick={() => setSelectedSpeaker(speaker)}
              >
                {/* Speaker Image and Basic Info */}
                <div className="flex items-start space-x-4 mb-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden bg-slate-700 flex-shrink-0">
                    <img
                      src={speaker.profilePhoto}
                      alt={speaker.fullName}
                      className="object-cover w-full h-full"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(speaker.fullName)}&background=6366f1&color=ffffff&size=64`;
                      }}
                    />
                    {/* API Photo indicator */}
                    {apiSpeakers.some(apiSpeaker => 
                      apiSpeaker.fullname.toLowerCase().trim() === speaker.fullName.toLowerCase().trim()
                    ) && (
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-xs text-white">✓</span>
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-white truncate">
                      {speaker.fullName}
                    </h3>
                    <p className="text-sm text-slate-300 truncate">
                      {speaker.titleRole}
                    </p>
                  </div>
                </div>

                {/* Session Info */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-yellow-500 mb-2 line-clamp-2">
                    {speaker.sessionTitle}
                  </h4>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className={`px-2 py-1 text-xs rounded-full text-white ${getSessionTypeColor(speaker.sessionType)}`}>
                      {speaker.sessionType}
                    </span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex items-center space-x-3">
                  {speaker.linkedinProfile && (
                    <a
                      href={speaker.linkedinProfile}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-blue-400 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FiLinkedin className="w-4 h-4" />
                    </a>
                  )}
                  {speaker.socialMediaLinks && (
                    <a
                      href={speaker.socialMediaLinks}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-gray-300 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {getSocialIcon(speaker.socialMediaLinks)}
                    </a>
                  )}
                </div>

                {/* Submission Date */}
                <div className="mt-4 pt-4 border-t border-slate-700">
                  <div className="flex items-center text-xs text-slate-400">
                    <FiCalendar className="w-3 h-3 mr-1" />
                    <span>Session: {speaker.sessionTime} in {speaker.sessionRoom}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredSpeakers.length === 0 && (
            <div className="text-center py-12">
              <FiUser className="w-16 h-16 text-slate-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-400 mb-2">No speakers found</h3>
              <p className="text-slate-500">Try adjusting your search criteria or filters.</p>
            </div>
          )}
        </div>
      </div>

      {/* Speaker Detail Modal */}
      {selectedSpeaker && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-slate-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold text-white">Speaker Details</h2>
                <button
                  onClick={() => setSelectedSpeaker(null)}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                {/* Speaker Info */}
                <div className="lg:col-span-2">
                  <div className="text-center mb-6">
                    <div className="relative w-32 h-32 rounded-full overflow-hidden bg-slate-700 mx-auto mb-4">
                      <img
                        src={selectedSpeaker.profilePhoto}
                        alt={selectedSpeaker.fullName}
                        className="object-cover w-full h-full"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(selectedSpeaker.fullName)}&background=6366f1&color=ffffff&size=128`;
                        }}
                      />
                      {/* API Photo indicator */}
                      {apiSpeakers.some(apiSpeaker => 
                        apiSpeaker.fullname.toLowerCase().trim() === selectedSpeaker.fullName.toLowerCase().trim()
                      ) && (
                        <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                          <span className="text-sm text-white">✓</span>
                        </div>
                      )}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {selectedSpeaker.fullName}
                    </h3>
                    <p className="text-slate-300 mb-4">{selectedSpeaker.titleRole}</p>
                    
                    <div className="space-y-2 text-sm text-slate-400">
                      <div className="flex items-center justify-center">
                        <FiCalendar className="w-4 h-4 mr-2" />
                        <span>Session: {selectedSpeaker.sessionTime} in {selectedSpeaker.sessionRoom}</span>
                      </div>
                    </div>
                  </div>

                  {/* Contact Info */}
                      <div className="bg-slate-700/50 rounded-lg p-4 mb-6">
                      <h4 className="text-sm font-semibold text-yellow-500 mb-3">Contact Information</h4>
                      <div className="space-y-2 text-sm">
                        {selectedSpeaker.email && (() => {
                        const emailParts = selectedSpeaker.email.split('@');
                        if (emailParts.length !== 2) {
                          return (
                          <p className="text-slate-300 truncate">
                            <span className="text-slate-400">Email:</span> {selectedSpeaker.email}
                          </p>
                          );
                        }
                        const [addr, tld] = emailParts;
                        const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
                          e.preventDefault();
                          window.location.href = `mailto:${addr}@${tld}`;
                        };
                        return (
                          <div className="flex items-center text-slate-300 min-w-0">
                          <span className="text-slate-400 mr-2 flex-shrink-0">Email:</span>
                          <a href="#" onClick={handleEmailClick} className="hover:underline truncate text-xs sm:text-sm">
                            {addr}@{tld}
                          </a>
                          </div>
                        );
                        })()}
                      </div>
                      </div>

                  {/* Social Links */}
                  <div className="bg-slate-700/50 rounded-lg p-4">
                    <h4 className="text-sm font-semibold text-yellow-500 mb-3">Social Links</h4>
                    <div className="space-y-2">
                      {selectedSpeaker.linkedinProfile && (
                        <a
                          href={selectedSpeaker.linkedinProfile}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                        >
                          <FiLinkedin className="w-4 h-4 mr-2" />
                          <span className="text-sm">LinkedIn</span>
                        </a>
                      )}
                      {selectedSpeaker.socialMediaLinks && (
                        <a
                          href={selectedSpeaker.socialMediaLinks}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-slate-300 hover:text-white transition-colors"
                        >
                          {getSocialIcon(selectedSpeaker.socialMediaLinks)}
                          <span className="text-sm ml-2">Other Social</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Session Details */}
                <div className="lg:col-span-3">
                  <div className="bg-slate-700/50 rounded-lg p-6 mb-6">
                    <h4 className="text-lg font-semibold text-yellow-500 mb-4">Session Information</h4>
                    <h5 className="text-xl font-semibold text-white mb-3">
                      {selectedSpeaker.sessionTitle}
                    </h5>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className={`px-3 py-1 text-sm rounded-full text-white ${getSessionTypeColor(selectedSpeaker.sessionType)}`}>
                        {selectedSpeaker.sessionType}
                      </span>
                    </div>

                  </div>

                  {/* Speaker Bio */}
                  {selectedSpeaker.speakerBio && (
                    <div className="bg-slate-700/50 rounded-lg p-6 mb-6">
                      <h4 className="text-sm font-semibold text-yellow-500 mb-3">Speaker Bio</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {selectedSpeaker.speakerBio}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
