"use client";

import React, { useState, useMemo, useEffect } from "react";
import Footer from "../components/Footer";
import { Header } from "../components/Header";
import { SpeakerSubmission } from "../../utils/types";
import { FiUser, FiCalendar, FiClock, FiMapPin, FiFilter, FiSearch, FiExternalLink, FiLinkedin, FiGithub, FiTwitter } from "react-icons/fi";
// import Image from "next/image";

// Sample data from the Excel file
const today = new Date().toISOString().split('T')[0];
const placeholderPhoto = "https://ui-avatars.com/api/?name=Speaker&background=6366f1&color=ffffff&size=128";
const sessions = [
    { title: "The ins and outs of production achitecture", speaker: "Yezur" },
    { title: "Integrating AI Agents to React Apps using Mastra", speaker: "Jackson Mwangi" },
    { title: "Shrink It, Ship It: Optimizing React Native Bundles with R8", speaker: "Michael Maina" },
    { title: "🚀 From Pages Router to App Router: A Practical Migration Roadmap in Next.js 14", speaker: "Royford Wanyoike" },
    { title: "The Hidden Cost of Copy-Paste: Why Your App Should Depend on People, Not Just Code", speaker: "Kenneth Mathari" },
    { title: "Evals in AI Agents", speaker: "James" },
    { title: "React Native enigma with the new architecture(Greenfield and Browfield Mobile apps)", speaker: "Alvin Otuya" },
    { title: "Musical Chairs with Gradle: Surviving the Build Party", speaker: "Jessica Randall" },
    { title: "Keep It Secret, Keep It Safe: A Developer’s Journey with Android Keystore", speaker: "Jessica Randall" },
    { title: "API Calls in Flutter: Let’s See If This One Breaks Me Less Than Android", speaker: "Jessica Randall" },
    { title: "Using AI to Solve Real-World Problems", speaker: "Oscar Madegwa" },
    { title: "Making local-first , offline-first mobile application with react native and expo.", speaker: "Maxwel ayal Asher" },
    { title: "Full-Stack AI: Building Production-Ready Applications with Next.js and Genkit", speaker: "Maina Wycliffe" },
    { title: "Greencoin Edition:Revolutionising Carbon Credits platform through Blockchain Decentralisation", speaker: "Robinson Otochi" },
    { title: "The Vibe Coder's Playbook: How Rules and MCPs Made My AI Development Actually Work", speaker: "Victor Mwenda" },
    { title: "GraphQL with Apollo: Data fetching with precision", speaker: "Roseland Andisi Ambuku" },
    { title: "Breaking Down the Frontend, Holding It Together: Microfrontends in a Monorepo", speaker: "Titus" },
    { title: "React Design Patterns", speaker: "Albina Nyawira Muturi" },
    { title: "Performance improvements of your React/Next app", speaker: "Albina Nyawira Muturi" },
    { title: "Component and E2E Testing with cypress", speaker: "Albina Nyawira Muturi" },
    { title: "Cloud computing AWS", speaker: "Samson Ateya" },
    { title: "Design Thinking: From Pull Request to Persona", speaker: "Zawadi Wanjala" },
    { title: "GitHub Spec Kit - Vibe code high-quality software faster.", speaker: "Mark Aloo" },
    { title: "Expo and Better Auth: Auth that doesn't suck", speaker: "Timothy Mugo" },
    { title: "Building agents with AI SDK", speaker: "Felix Jumason" },
    { title: "INSTRUMENTATION WITH OTENTELEMETRY ON NEXT JS  APPLICATIONS", speaker: "Daniel Gitari" },
  ];
  

  const speakerSubmissions: SpeakerSubmission[] = [
    {
      id: "1",
      email: "mainamichael2849@gmail.com",
      fullName: "Michael Maina",
      phoneNumber: "+254790309409",
      titleRole: "Mobile developer",
      linkedinProfile: "https://www.linkedin.com/in/michael-maina-087227235?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      socialMediaLinks: "github.com/Muchael123",
      sessionType: "LS",
      sessionRoom: "LB2-1",
      sessionTime: "10:40 - 10:55",
      sessionDate: today,
      speakerBio: "",
      profilePhoto: placeholderPhoto,
      sessionTitle: "Shrink It, Ship It: Optimizing React Native Bundles with R8",
      targetAudience: "",
      sessionAbstract: "",
      keyTakeaways: "",
      technicalPrerequisites: "",
      sessionUniqueness: "",
      dietaryRestrictions: "",
      accessibilityRequirements: "",
      specialEquipmentNeeds: "",
      coPresenterInfo: "",
      additionalComments: "",
      codeOfConductAgreement: "",
      passportCountry: ""
    },
    {
      id: "2",
      email: "roywanyoike328@gmail.com",
      fullName: "Royford Wanyoike",
      phoneNumber: "0706103000",
      titleRole: "Software Engineer",
      linkedinProfile: "https://www.linkedin.com/in/roywanyoike/",
      socialMediaLinks: "https://github.com/Roy-Wanyoike",
      sessionType: "FS",
      sessionRoom: "FB1-4",
      sessionTime: "14:30 - 15:00",
      sessionDate: today,
      speakerBio: "",
      profilePhoto: placeholderPhoto,
      sessionTitle: "🚀 From Pages Router to App Router: A Practical Migration Roadmap in Next.js 14",
      targetAudience: "",
      sessionAbstract: "",
      keyTakeaways: "",
      technicalPrerequisites: "",
      sessionUniqueness: "",
      dietaryRestrictions: "",
      accessibilityRequirements: "",
      specialEquipmentNeeds: "",
      coPresenterInfo: "",
      additionalComments: "",
      codeOfConductAgreement: "",
      passportCountry: ""
    },
    {
      id: "3",
      email: "mathari580@gmail.com",
      fullName: "Kenneth Mathari",
      phoneNumber: "+254722747545",
      titleRole: "Snr Mobile Developer",
      linkedinProfile: "https://www.linkedin.com/in/kenneth-mathari/",
      socialMediaLinks: "https://github.com/KennethMathari",
      sessionType: "FS",
      sessionRoom: "FB1-3",
      sessionTime: "11:55-12:25",
      sessionDate: today,
      speakerBio: "",
      profilePhoto: placeholderPhoto,
      sessionTitle: "The Hidden Cost of Copy-Paste: Why Your App Should Depend on People, Not Just Code",
      targetAudience: "",
      sessionAbstract: "",
      keyTakeaways: "",
      technicalPrerequisites: "",
      sessionUniqueness: "",
      dietaryRestrictions: "",
      accessibilityRequirements: "",
      specialEquipmentNeeds: "",
      coPresenterInfo: "",
      additionalComments: "",
      codeOfConductAgreement: "",
      passportCountry: ""
    },
    {
      id: "4",
      email: "jmskanyiri@gmail.com",
      fullName: "James",
      phoneNumber: "0797357665",
      titleRole: "AI Engineer",
      linkedinProfile: "https://www.linkedin.com/in/james-kanyiri-b48b6b1a7/",
      socialMediaLinks: "https://github.com/jameskanyiri?tab=repositories",
      sessionType: "LS",
      sessionRoom: "LB1-2",
      sessionTime: "11:35 - 11:50",
      sessionDate: today,
      speakerBio: "",
      profilePhoto: placeholderPhoto,
      sessionTitle: "Evals in AI Agents",
      targetAudience: "",
      sessionAbstract: "",
      keyTakeaways: "",
      technicalPrerequisites: "",
      sessionUniqueness: "",
      dietaryRestrictions: "",
      accessibilityRequirements: "",
      specialEquipmentNeeds: "",
      coPresenterInfo: "",
      additionalComments: "",
      codeOfConductAgreement: "",
      passportCountry: ""
    },
    {
      id: "5",
      email: "otuyaalvin@gmail.com",
      fullName: "Alvin Otuya",
      phoneNumber: "+254748755840",
      titleRole: "Senior Mobile Engineer",
      linkedinProfile: "https://www.linkedin.com/in/alvin-otuya-3744b7257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      socialMediaLinks: "x.com/alvinotuya",
      sessionType: "FS",
      sessionRoom: "FB1-2",
      sessionTime: "11:00 - 11:30",
      sessionDate: today,
      speakerBio: "",
      profilePhoto: placeholderPhoto,
      sessionTitle: "React Native enigma with the new architecture(Greenfield and Browfield Mobile apps)",
      targetAudience: "",
      sessionAbstract: "",
      keyTakeaways: "",
      technicalPrerequisites: "",
      sessionUniqueness: "",
      dietaryRestrictions: "",
      accessibilityRequirements: "",
      specialEquipmentNeeds: "",
      coPresenterInfo: "",
      additionalComments: "",
      codeOfConductAgreement: "",
      passportCountry: ""
    },
    {
      id: "6",
      email: "wmmaina7@gmail.com",
      fullName: "Maina Wycliffe",
      phoneNumber: "254700128767",
      titleRole: "Technical Solutions Architect (Unstacked Labs)",
      linkedinProfile: "https://www.linkedin.com/in/mainawycliffe/",
      socialMediaLinks: "https://allthingstypescript.dev/\nhttps://github.com/mainawycliffe/",
      sessionType: "FS",
      sessionRoom: "FB2-2",
      sessionTime: "11:00 - 11:30",
      sessionDate: today,
      speakerBio: "",
      profilePhoto: placeholderPhoto,
      sessionTitle: "Full-Stack AI: Building Production-Ready Applications with Next.js and Genkit",
      targetAudience: "",
      sessionAbstract: "",
      keyTakeaways: "",
      technicalPrerequisites: "",
      sessionUniqueness: "",
      dietaryRestrictions: "",
      accessibilityRequirements: "",
      specialEquipmentNeeds: "",
      coPresenterInfo: "",
      additionalComments: "",
      codeOfConductAgreement: "",
      passportCountry: ""
    },
    {
      id: "7",
      email: "kiambi15@gmail.com",
      fullName: "Victor Mwenda",
      phoneNumber: "0726766766",
      titleRole: "Senior Software Engineer",
      linkedinProfile: "https://www.linkedin.com/in/victor-mwenda/",
      socialMediaLinks: "https://www.victormwenda.com",
      sessionType: "FS",
      sessionRoom: "FB2-1",
      sessionTime: "10:05 - 10:35",
      sessionDate: today,
      speakerBio: "",
      profilePhoto: placeholderPhoto,
      sessionTitle: "The Vibe Coder's Playbook: How Rules and MCPs Made My AI Development Actually Work",
      targetAudience: "",
      sessionAbstract: "",
      keyTakeaways: "",
      technicalPrerequisites: "",
      sessionUniqueness: "",
      dietaryRestrictions: "",
      accessibilityRequirements: "",
      specialEquipmentNeeds: "",
      coPresenterInfo: "",
      additionalComments: "",
      codeOfConductAgreement: "",
      passportCountry: ""
    },
    {
      id: "8",
      email: "roselandambuku@gmail.com",
      fullName: "Roseland Andisi Ambuku",
      phoneNumber: "0705978737",
      titleRole: "Software Engineer",
      linkedinProfile: "https://www.linkedin.com/in/roseland-ambuku/",
      socialMediaLinks: "https://github.com/andisiambuku",
      sessionType: "LS",
      sessionRoom: "LB1-4",
      sessionTime: "15:05 - 15:20",
      sessionDate: today,
      speakerBio: "",
      profilePhoto: placeholderPhoto,
      sessionTitle: "GraphQL with Apollo: Data fetching with precision",
      targetAudience: "",
      sessionAbstract: "",
      keyTakeaways: "",
      technicalPrerequisites: "",
      sessionUniqueness: "",
      dietaryRestrictions: "",
      accessibilityRequirements: "",
      specialEquipmentNeeds: "",
      coPresenterInfo: "",
      additionalComments: "",
      codeOfConductAgreement: "",
      passportCountry: ""
    },
    {
      id: "9",
      email: "titusgik@gmail.com",
      fullName: "Titus",
      phoneNumber: "0704718169",
      titleRole: "“Breaking Down the Frontend, Holding It Together: Microfrontends in a Monorepo”",
      linkedinProfile: "https://www.linkedin.com/in/titus-thumbi-103882190/",
      socialMediaLinks: "https://www.linkedin.com/in/titus-thumbi-103882190/",
      sessionType: "LS",
      sessionRoom: "LB1-3",
      sessionTime: "12:30 - 12:45",
      sessionDate: today,
      speakerBio: "",
      profilePhoto: placeholderPhoto,
      sessionTitle: "Breaking Down the Frontend, Holding It Together: Microfrontends in a Monorepo",
      targetAudience: "",
      sessionAbstract: "",
      keyTakeaways: "",
      technicalPrerequisites: "",
      sessionUniqueness: "",
      dietaryRestrictions: "",
      accessibilityRequirements: "",
      specialEquipmentNeeds: "",
      coPresenterInfo: "",
      additionalComments: "",
      codeOfConductAgreement: "",
      passportCountry: ""
    },
    {
      id: "10",
      email: "albinamuturi@gmail.com",
      fullName: "Albina Nyawira Muturi",
      phoneNumber: "+254702441899",
      titleRole: "Senior Software Engineer",
      linkedinProfile: "https://www.linkedin.com/in/nyawira-muturi/",
      socialMediaLinks: "https://dame-techie.hashnode.dev/",
      sessionType: "FS",
      sessionRoom: "FB2-4",
      sessionTime: "14:30 - 15:00",
      sessionDate: today,
      speakerBio: "",
      profilePhoto: placeholderPhoto,
      sessionTitle: "React Design Patterns",
      targetAudience: "",
      sessionAbstract: "",
      keyTakeaways: "",
      technicalPrerequisites: "",
      sessionUniqueness: "",
      dietaryRestrictions: "",
      accessibilityRequirements: "",
      specialEquipmentNeeds: "",
      coPresenterInfo: "",
      additionalComments: "",
      codeOfConductAgreement: "",
      passportCountry: ""
    },
    {
      id: "11",
      email: "ateyasamson@gmail.com",
      fullName: "Samson Ateya",
      phoneNumber: "+254700598899",
      titleRole: "Cloud Engineer",
      linkedinProfile: "https://www.linkedin.com/in/sam-ateya?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      socialMediaLinks: "https://github.com/ateyasam85",
      sessionType: "LS",
      sessionRoom: "LB2-2",
      sessionTime: "11:35 - 11:50",
      sessionDate: today,
      speakerBio: "",
      profilePhoto: placeholderPhoto,
      sessionTitle: "Cloud computing AWS",
      targetAudience: "",
      sessionAbstract: "",
      keyTakeaways: "",
      technicalPrerequisites: "",
      sessionUniqueness: "",
      dietaryRestrictions: "",
      accessibilityRequirements: "",
      specialEquipmentNeeds: "",
      coPresenterInfo: "",
      additionalComments: "",
      codeOfConductAgreement: "",
      passportCountry: ""
    },
    {
      id: "12",
      email: "g.zawadi.w@gmail.com",
      fullName: "Zawadi Wanjala",
      phoneNumber: "+254712340007",
      titleRole: "Technical Product Manager",
      linkedinProfile: "https://www.linkedin.com/in/grace-zawadi/",
      socialMediaLinks: "https://github.com/3N61N33R, https://x.com/zawadi_g_",
      sessionType: "FS",
      sessionRoom: "FB2-3",
      sessionTime: "11:55 - 12:25",
      sessionDate: today,
      speakerBio: "",
      profilePhoto: placeholderPhoto,
      sessionTitle: "Design Thinking: From Pull Request to Persona",
      targetAudience: "",
      sessionAbstract: "",
      keyTakeaways: "",
      technicalPrerequisites: "",
      sessionUniqueness: "",
      dietaryRestrictions: "",
      accessibilityRequirements: "",
      specialEquipmentNeeds: "",
      coPresenterInfo: "",
      additionalComments: "",
      codeOfConductAgreement: "",
      passportCountry: ""
    },
    {
      id: "13",
      email: "mbenjerminne@gmail.com",
      fullName: "Mark Aloo",
      phoneNumber: "0799055101",
      titleRole: "Software Engineer - Safaricom PLC",
      linkedinProfile: "https://www.linkedin.com/in/thecodeinfluencer/",
      socialMediaLinks: "https://thecodeinfluencer.dev/",
      sessionType: "LS",
      sessionRoom: "LB1-5",
      sessionTime: "10:00 - 10:35",
      sessionDate: today,
      speakerBio: "",
      profilePhoto: placeholderPhoto,
      sessionTitle: "Software Engineer - Safaricom PLC",
      targetAudience: "",
      sessionAbstract: "",
      keyTakeaways: "",
      technicalPrerequisites: "",
      sessionUniqueness: "",
      dietaryRestrictions: "",
      accessibilityRequirements: "",
      specialEquipmentNeeds: "",
      coPresenterInfo: "",
      additionalComments: "",
      codeOfConductAgreement: "",
      passportCountry: ""
    },
    {
      id: "14",
      email: "timomugo01@gmail.com",
      fullName: "Timothy Mugo",
      phoneNumber: "+254795114587",
      titleRole: "Software Engineer",
      linkedinProfile: "https://www.linkedin.com/in/timothygachengo/",
      socialMediaLinks: "https://github.com/timothygachengo",
      sessionType: "LS",
      sessionRoom: "LB1-1",
      sessionTime: "10:40 - 10:55",
      sessionDate: today,
      speakerBio: "",
      profilePhoto: placeholderPhoto,
      sessionTitle: "Expo and Better Auth: Auth that doesn't suck",
      targetAudience: "",
      sessionAbstract: "",
      keyTakeaways: "",
      technicalPrerequisites: "",
      sessionUniqueness: "",
      dietaryRestrictions: "",
      accessibilityRequirements: "",
      specialEquipmentNeeds: "",
      coPresenterInfo: "",
      additionalComments: "",
      codeOfConductAgreement: "",
      passportCountry: ""
    },
    {
      id: "15",
      email: "felixkent360@gmail.com",
      fullName: "Felix Jumason",
      phoneNumber: "+254703198968",
      titleRole: "Noc",
      linkedinProfile: "https://www.linkedin.com/in/felix-jumason-9b209a243/",
      socialMediaLinks: "https://twitter.com/blackie_360",
      sessionType: "LS",
      sessionRoom: "LB1-3",
      sessionTime: "12:30 - 12:45",
      sessionDate: today,
      speakerBio: "",
      profilePhoto: placeholderPhoto,
      sessionTitle: "Building agents with AI SDK",
      targetAudience: "",
      sessionAbstract: "",
      keyTakeaways: "",
      technicalPrerequisites: "",
      sessionUniqueness: "",
      dietaryRestrictions: "",
      accessibilityRequirements: "",
      specialEquipmentNeeds: "",
      coPresenterInfo: "",
      additionalComments: "",
      codeOfConductAgreement: "",
      passportCountry: ""
    },
    {
      id: "16",
      email: "gitarimaina254@gmail.com",
      fullName: "Daniel Gitari",
      phoneNumber: "0701719066",
      titleRole: "DEVOPS ENGINEER",
      linkedinProfile: "https://www.linkedin.com/in/daniel-maina-gitari-464396177/",
      socialMediaLinks: "https://www.linkedin.com/in/daniel-maina-gitari-464396177/",
      sessionType: "LS",
      sessionRoom: "LB2-4",
      sessionTime: "15:05 - 15:20",
      sessionDate: today,
      speakerBio: "",
      profilePhoto: placeholderPhoto,
      sessionTitle: "INSTRUMENTATION WITH OTENTELEMETRY ON NEXT JS  APPLICATIONS",
      targetAudience: "",
      sessionAbstract: "",
      keyTakeaways: "",
      technicalPrerequisites: "",
      sessionUniqueness: "",
      dietaryRestrictions: "",
      accessibilityRequirements: "",
      specialEquipmentNeeds: "",
      coPresenterInfo: "",
      additionalComments: "",
      codeOfConductAgreement: "",
      passportCountry: ""
    },
    {
      id: "17",
      email: "smurgoh@gmail.com",
      fullName: "Simon Njeru",
      phoneNumber: "254722814560",
      titleRole: "Bitcoin Dev",
      linkedinProfile: "",
      socialMediaLinks: "",
      sessionType: "LS",
      sessionRoom: "LB2-3",
      sessionTime: "12:30 - 12:45",
      sessionDate: today,
      speakerBio: "",
      profilePhoto: placeholderPhoto,
      sessionTitle: "Bitcoin Dev",
      targetAudience: "",
      sessionAbstract: "",
      keyTakeaways: "",
      technicalPrerequisites: "",
      sessionUniqueness: "",
      dietaryRestrictions: "",
      accessibilityRequirements: "",
      specialEquipmentNeeds: "",
      coPresenterInfo: "",
      additionalComments: "",
      codeOfConductAgreement: "",
      passportCountry: ""
    },
  ];
  

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
          console.log(`✅ Matched: ${submission.fullName} -> ${matchingApiSpeaker.speaker_image}`);
          return {
            ...submission,
            profilePhoto: matchingApiSpeaker.speaker_image
          };
        } else {
          console.log(`❌ No match found for: ${submission.fullName}`);
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

  const audiences = useMemo(() => {
    const aud = updatedSpeakerSubmissions.map(s => s.targetAudience).filter(Boolean);
    return Array.from(new Set(aud));
  }, [updatedSpeakerSubmissions]);

  // Filter speakers based on search and filters
  const filteredSpeakers = useMemo(() => {
    return updatedSpeakerSubmissions.filter(speaker => {
      const matchesSearch = searchTerm === "" || 
        speaker.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        speaker.sessionTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
        speaker.titleRole.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesSessionType = selectedSessionType === "" || speaker.sessionType === selectedSessionType;
      const matchesAudience = selectedAudience === "" || speaker.targetAudience === selectedAudience;

      return matchesSearch && matchesSessionType && matchesAudience;
    });
  }, [updatedSpeakerSubmissions, searchTerm, selectedSessionType, selectedAudience]);

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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="lg:col-span-2">
                <div className="relative">
                  <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search speakers, sessions, or roles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  />
                </div>
              </div>
              
              <select
                value={selectedSessionType}
                onChange={(e) => setSelectedSessionType(e.target.value)}
                className="px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                <option value="">All Session Types</option>
                {sessionTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>

              <select
                value={selectedAudience}
                onChange={(e) => setSelectedAudience(e.target.value)}
                className="px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                <option value="">All Audiences</option>
                {audiences.map(audience => (
                  <option key={audience} value={audience}>{audience}</option>
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
                    <span className="px-2 py-1 text-xs rounded-full bg-slate-600 text-slate-200">
                      {speaker.targetAudience}
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

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Speaker Info */}
                <div className="lg:col-span-1">
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
                      <p className="text-slate-300">
                        <span className="text-slate-400">Email:</span> {selectedSpeaker.email}
                      </p>
                      <p className="text-slate-300">
                        <span className="text-slate-400">Phone:</span> {selectedSpeaker.phoneNumber}
                      </p>
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
                <div className="lg:col-span-2">
                  <div className="bg-slate-700/50 rounded-lg p-6 mb-6">
                    <h4 className="text-lg font-semibold text-yellow-500 mb-4">Session Information</h4>
                    <h5 className="text-xl font-semibold text-white mb-3">
                      {selectedSpeaker.sessionTitle}
                    </h5>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className={`px-3 py-1 text-sm rounded-full text-white ${getSessionTypeColor(selectedSpeaker.sessionType)}`}>
                        {selectedSpeaker.sessionType}
                      </span>
                      <span className="px-3 py-1 text-sm rounded-full bg-slate-600 text-slate-200">
                        {selectedSpeaker.targetAudience}
                      </span>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h6 className="text-sm font-semibold text-slate-300 mb-2">Abstract</h6>
                        <p className="text-slate-400 text-sm leading-relaxed">
                          {selectedSpeaker.sessionAbstract}
                        </p>
                      </div>

                      {selectedSpeaker.keyTakeaways && (
                        <div>
                          <h6 className="text-sm font-semibold text-slate-300 mb-2">Key Takeaways</h6>
                          <p className="text-slate-400 text-sm leading-relaxed whitespace-pre-line">
                            {selectedSpeaker.keyTakeaways}
                          </p>
                        </div>
                      )}

                      {selectedSpeaker.technicalPrerequisites && (
                        <div>
                          <h6 className="text-sm font-semibold text-slate-300 mb-2">Technical Prerequisites</h6>
                          <p className="text-slate-400 text-sm leading-relaxed whitespace-pre-line">
                            {selectedSpeaker.technicalPrerequisites}
                          </p>
                        </div>
                      )}

                      {selectedSpeaker.sessionUniqueness && (
                        <div>
                          <h6 className="text-sm font-semibold text-slate-300 mb-2">What Makes This Session Unique</h6>
                          <p className="text-slate-400 text-sm leading-relaxed">
                            {selectedSpeaker.sessionUniqueness}
                          </p>
                        </div>
                      )}
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

                  {/* Additional Requirements */}
                  {(selectedSpeaker.dietaryRestrictions || selectedSpeaker.accessibilityRequirements || selectedSpeaker.specialEquipmentNeeds) && (
                    <div className="bg-slate-700/50 rounded-lg p-6">
                      <h4 className="text-sm font-semibold text-yellow-500 mb-3">Additional Requirements</h4>
                      <div className="space-y-2 text-sm">
                        {selectedSpeaker.dietaryRestrictions && selectedSpeaker.dietaryRestrictions !== 'N/A' && (
                          <p className="text-slate-300">
                            <span className="text-slate-400">Dietary:</span> {selectedSpeaker.dietaryRestrictions}
                          </p>
                        )}
                        {selectedSpeaker.accessibilityRequirements && selectedSpeaker.accessibilityRequirements !== 'N/A' && (
                          <p className="text-slate-300">
                            <span className="text-slate-400">Accessibility:</span> {selectedSpeaker.accessibilityRequirements}
                          </p>
                        )}
                        {selectedSpeaker.specialEquipmentNeeds && selectedSpeaker.specialEquipmentNeeds !== 'N/A' && (
                          <p className="text-slate-300">
                            <span className="text-slate-400">Equipment:</span> {selectedSpeaker.specialEquipmentNeeds}
                          </p>
                        )}
                      </div>
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
