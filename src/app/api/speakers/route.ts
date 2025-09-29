import {NextRequest, NextResponse} from 'next/server';


const speakerData = [
    {
    "id" : "1337",
    "fullname": "Michael Maina",
    "title_role": "Mobile developer",
    "linkedin_url": "https://www.linkedin.com/in/michael-maina-087227235?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    "other_social": "github.com/Muchael123",
    "speaker_bio": "Michael Maina is a Frontend and Mobile Developer with 4.5 years of programming experience and 3 years specializing in React and React Native. He is the Founder & CEO of Wabunifu Labs, Director at 25Cargo, and an External Contractor at Brainverse. Michael also leads innovative projects like Fololimo, focusing on agritech solutions powered by AI and IoT. Passionate about community building and technology, he creates impactful solutions that empower people and businesses.",
    "speaker_image": "https://vo3gv2h0n9olcv4f.public.blob.vercel-storage.com/spkr-25/Michael_maina-nBy0MXYwYYvB8cflF2AvjfUHW34MQ4.jpg",
    "session_title": "Shrink It, Ship It: Optimizing React Native Bundles with R8",
    "session_abstract": "React Native apps often suffer from large bundle sizes and performance issues. In this session, Michael Maina explores how R8, Android’s built-in code shrinker and optimizer, can help developers ship smaller, faster, and more secure React Native apps. Learn practical steps to enable R8, configure it effectively, and optimize your builds for better performance.",
    "co_presenter_info": null
  },
  {
    "id" : "2337",
    "fullname": "Royford Wanyoike",
    "title_role": "Software Engineer",
    "linkedin_url": "https://www.linkedin.com/in/roywanyoike/",
    "other_social": "https://github.com/Roy-Wanyoike",
    "speaker_bio": "https://sessionize.com/royford-wanyoike/",
    "speaker_image": "https://photos.google.com/photo/AF1QipMh7UP2POpmIUPdpK4G6z5AyMFv0X2FdOjlELwM",
    "session_title": "From Pages Router to App Router: A Practical Migration Roadmap in Next.js 14",
    "session_abstract": "Next.js has evolved rapidly, and with the introduction of the App Router, developers face both exciting opportunities and real migration challenges. In this talk, I’ll share a hands-on roadmap for migrating an existing React/Next.js project from the Pages Router to the new App Router. We’ll cover practical steps, common pitfalls, and proven strategies for adopting features like server components, streaming, and data fetching. By the end, attendees will leave with a clear step-by-step migration playbook they can apply immediately in their projects.",
    "co_presenter_info": null
  },
  {
    "id" : "3337",
    "fullname": "Kenneth Mathari",
    "title_role": "Snr Mobile Developer",
    "linkedin_url": "https://www.linkedin.com/in/kenneth-mathari/",
    "other_social": "https://github.com/KennethMathari",
    "speaker_bio": "Mobile Developer with a strong focus on native & cross-platform mobile app development. I’ve spent the last few years building mobile app solutions that prioritize clean architecture, great user experiences, and scalable codebases. I’m also a strong advocate for open source, and I enjoy exploring how community-driven libraries can accelerate mobile development and bring developers together.",
    "speaker_image": "https://media.licdn.com/dms/image/v2/D4D03AQFNgYxt3GDiyQ/profile-displayphoto-shrink_800_800/B4DZeHFSVmGUAg-/0/1750318000297?e=1758758400&v=beta&t=F1-TCMsyIXpYrjixYpoe8Kyefs9zrpgIxcgKKrM3Klo",
    "session_title": "The Hidden Cost of Copy-Paste: Why Your App Should Depend on People, Not Just Code",
    "session_abstract": "In today’s fast-paced mobile development, it’s easy to copy-paste code or drop in open source libraries without a second thought but every dependency comes with people, context, and consequences. This talk explores the often-overlooked human side of open source, highlighting the importance of understanding the communities behind the code. Through real-world stories and practical insights, we’ll learn how to evaluate project health, engage with maintainers, and contribute meaningfully, even as consumers. By shifting our mindset from passive use to active participation, we can build more secure, resilient, and collaborative mobile apps.",
    "co_presenter_info": null
  },
  {
    "id" : "4337",
    "fullname": "James",
    "title_role": "AI Engineer",
    "linkedin_url": "https://www.linkedin.com/in/james-kanyiri-b48b6b1a7/",
    "other_social": "https://github.com/jameskanyiri?tab=repositories",
    "speaker_bio": "I am an  AI Engineer with a focus on building intelligent applications. I am active in the developer Langchain community through talks and workshops on LangChain, LangGraph, and Langsmith",
    "speaker_image": "https://vo3gv2h0n9olcv4f.public.blob.vercel-storage.com/spkr-25/James_kanyiri-sCNb5aiN85blUPcjFCnZEorLlmXmq8.jpg",
    "session_title": "Evals in AI Agents",
    "session_abstract": "Evaluating AI agents is one of the most overlooked yet critical steps when integrating intelligent systems into modern applications. In this session, we’ll explore practical techniques for testing and measuring the performance of AI agents covering retrieval-augmented generation (RAG) workflows, prompt engineering, and agent reliability. Attendees will learn how to apply evaluation frameworks to ensure their AI-powered features behave consistently and add real value when integrated into real world applications.",
    "co_presenter_info": null
  },
  {
    "id" : "5337",
    "fullname": "Alvin Otuya",
    "title_role": "Senior Mobile Engineer ",
    "linkedin_url": "https://www.linkedin.com/in/alvin-otuya-3744b7257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    "other_social": "x.com/alvinotuya",
    "speaker_bio": "Alvin is a senior Mobile Engineer at Spiro building Mobile solutions that is serving millions across Africa in the EV sector. He has 5 years of experience in React Native . With 2 years of active open source contribution to the React Native core library. ",
    "speaker_image": "https://vo3gv2h0n9olcv4f.public.blob.vercel-storage.com/spkr-25/alvin_otuya-3k0mVMC7Q4I8d0Ohwtti8t7xrXi3Nx.jpg",
    "session_title": "React Native enigma with the new architecture(Greenfield and Browfield Mobile apps)",
    "session_abstract": "The session will be focused on the RN’s enhancement with the bridgeless new architecture and how devs can adopt it effectively on Greenfield apps(existing rn apps with the legacy arch) and brownfield apps(migrating from native). \n\nPrimary areas:\nTurbo Modules cross-platform with c++\nJSI(JavaScript Syntax)\nReact Native Fabric renderer\nThe new threading model\n",
    "co_presenter_info": "https://www.linkedin.com/in/patrick-waweru-55330b22b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
  },
  {
    "id" : "6337",
    "fullname": "Maina Wycliffe",
    "title_role": "Technical Solutions Architect (Unstacked Labs)",
    "linkedin_url": "https://www.linkedin.com/in/mainawycliffe/",
    "other_social": "https://allthingstypescript.dev/\nhttps://github.com/mainawycliffe/",
    "speaker_bio": null,
    "speaker_image": "https://vo3gv2h0n9olcv4f.public.blob.vercel-storage.com/spkr-25/maina_wycliffe-tAOiiP2rohzZMv02NdewRpS6FQhzXz.jpg",
    "session_title": "Full-Stack AI: Building Production-Ready Applications with Next.js and Genkit",
    "session_abstract": "Join us for a deep dive into building modern, AI-powered web applications using the powerful combination of Next.js and Genkit. In this session, we'll bridge the gap between frontend user experiences and complex backend AI logic.\n\nYou will learn how to leverage Genkit's open-source framework to reliably build, test, and monitor AI flows, including those using Retrieval-Augmented Generation (RAG). We'll then demonstrate how to seamlessly integrate these Genkit flows into a Next.js application, exposing them through API routes and consuming them with React Server Components.",
    "co_presenter_info": null
  },
  {
    "id" : "7337",
    "fullname": "Victor Mwenda",
    "title_role": "Senior Software Engineer",
    "linkedin_url": "https://www.linkedin.com/in/victor-mwenda/",
    "other_social": "https://www.victormwenda.com",
    "speaker_bio": "Victor is a seasoned Software Engineer with over 7 years of experience in crafting innovative applications.\nPassionate about advancing technology, Victor is dedicated to exploring and advocating for cutting-edge tools and practices in Software development.",
    "speaker_image": "https://vo3gv2h0n9olcv4f.public.blob.vercel-storage.com/spkr-25/victor_mwenda-nbe7ldcBEz788acUpZE3KkR1ej2OHt.jpeg",
    "session_title": "The Vibe Coder's Playbook: How Rules and MCPs Made My AI Development Actually Work",
    "session_abstract": "After months of wrestling with inconsistent AI coding results, half-finished functions, conflicting architectural patterns, and code that looked smart but broke in production, I developed a systematic approach that actually works. This isn't another \"AI will replace developers\" talk. It's about making AI pair programming reliable, consistent, and genuinely productive.\nI'll share the exact rule-based framework I use daily with Cursor and Claude Code that transformed my development process rom chaotic AI interactions to systematic, high-quality code generation. ",
    "co_presenter_info": null
  },
  {
    "id" : "8337",
    "fullname": "Roseland Andisi Ambuku",
    "title_role": "Software Engineer",
    "linkedin_url": "https://www.linkedin.com/in/roseland-ambuku/",
    "other_social": "https://github.com/andisiambuku",
    "speaker_bio": "I am Roseland Ambuku, a Software Developer with experience in React. ",
    "speaker_image": "https://vo3gv2h0n9olcv4f.public.blob.vercel-storage.com/spkr-25/roseland_ambuku-DC0etjjfsFqnVx2Jv1vnCCc4pw3Ogf.jpg",
    "session_title": "GraphQL with Apollo: Data fetching with precision",
    "session_abstract": "In this session we shall discuss the pain points of working with REST and how GraphQL addresses those pain points. We shall see precise data fetching in action and how it culminates in shorter and efficient development of frontends.",
    "co_presenter_info": null
  },
  {
    "id" : "9337",
    "fullname": "Titus",
    "title_role": "“Breaking Down the Frontend, Holding It Together: Microfrontends in a Monorepo”",
    "linkedin_url": "https://www.linkedin.com/in/titus-thumbi-103882190/",
    "other_social": "https://www.linkedin.com/in/titus-thumbi-103882190/",
    "speaker_bio": "https://www.linkedin.com/in/titus-thumbi-103882190/",
    "speaker_image": "https://media.licdn.com/dms/image/v2/C5603AQEWqqNHN8b3kQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1649407928091?e=1758758400&v=beta&t=JQLTl98xjM27Y4Hmtpyxnhg9uJiQiynHLq6D_-o4KUM",
    "session_title": "“Breaking Down the Frontend, Holding It Together: Microfrontends in a Monorepo”",
    "session_abstract": "Microfrontends are a powerful way to scale frontend development across teams, but they often introduce challenges like duplicated tooling, inconsistent dependencies, and siloed workflows. A monorepo can help solve these problems by providing a single source of truth, unified build and test pipelines, and a structure that supports both autonomy and alignment. In this session, we’ll break down practical strategies, common pitfalls, and real-world lessons on combining microfrontends with a monorepo. You’ll leave with patterns and best practices to keep your frontend architecture both modular and maintainable, while empowering teams to deliver faster with confidence.",
    "co_presenter_info": null
  },
  {
    "id" : "10337",
    "fullname": "Albina Nyawira Muturi",
    "title_role": "Senior Software Engineer",
    "linkedin_url": "https://www.linkedin.com/in/nyawira-muturi/",
    "other_social": "https://dame-techie.hashnode.dev/",
    "speaker_bio": null,
    "speaker_image": "https://vo3gv2h0n9olcv4f.public.blob.vercel-storage.com/spkr-25/albina_muturi-mwIi3SuVs08YWYqYjQERJUfCJcRfxR.jpg",
    "session_title": "Component and E2E Testing with cypress",
    "session_abstract": "Quick Crash Course: A live demo session on how to use Cypress for e2e and component testing.",
    "co_presenter_info": null
  },
  {
    "id" : "11337",
    "fullname": "Samson Ateya",
    "title_role": "Cloud Engineer ",
    "linkedin_url": "https://www.linkedin.com/in/sam-ateya?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    "other_social": "https://github.com/ateyasam85",
    "speaker_bio": "I am a Cloud Engineer specializing in building and managing scalable, secure, and cost-efficient cloud environments. My expertise spans cloud infrastructure, DevOps practices, automation, and containerization, enabling me to deliver solutions that streamline operations and drive digital transformation. I am committed to leveraging cloud-native technologies to optimize performance, enhance reliability, and support innovation in dynamic business environments.",
    "speaker_image": "https://vo3gv2h0n9olcv4f.public.blob.vercel-storage.com/spkr-25/samson_ateya-g4Q7k7sJpWGPWqZFRdIMzn1UTIQc1J.jpg",
    "session_title": "Cloud computing AWS",
    "session_abstract": "In today’s fast-evolving digital landscape, organizations are under pressure to build systems that are not only scalable but also secure, reliable, and cost-efficient. In this session, I will share practical insights on designing and deploying modern cloud architectures that leverage automation, containerization, and DevOps practices. Attendees will learn how to streamline cloud operations, optimize resource utilization, and adopt cloud-native solutions that accelerate digital transformation. The session will also highlight real-world challenges and best practices for ensuring performance, resilience, and sustainability in dynamic business environments.",
    "co_presenter_info": null
  },
  {
    "id" : "12337",
    "fullname": "Zawadi Wanjala",
    "title_role": "Technical Product Manager",
    "linkedin_url": "https://www.linkedin.com/in/grace-zawadi/",
    "other_social": "https://github.com/3N61N33R, https://x.com/zawadi_g_",
    "speaker_bio": "Product Manager who swapped her IDE for a whiteboard to fix the ultimate bug: building the wrong thing.  After spending years deep in the world of engineering, crafting APIs and wrangling databases, she became fascinated by the gap between a perfectly engineered solution and what users actually needed.\n\nThis curiosity led her to product management, a move driven by the belief that the best products are built when user empathy meets brilliant engineering, —and by a desire to help teams focus on the \"why\". ( Also, prevent stakeholders from giving direct requests to the devs )\n\nToday, she brings Design Thinking into the dev workflow—not as a stuffy process, but as a practical toolkit every engineer can use to build more impactful & successful products. \n\nWhen not decoding user needs, you can find her in her creative corner. Working on a puzzle, painting, styling or photography.",
    "speaker_image": "https://vo3gv2h0n9olcv4f.public.blob.vercel-storage.com/spkr-25/zawadi_wanjala-1C7BdcmY1ZdutMQ7PHVkX5sBCpZU13.png",
    "session_title": "Design Thinking: From Pull Request to Persona",
    "session_abstract": "As engineers, we excel at turning complex requirements into beautiful, functional components. But what happens when those requirements miss the mark? As an SE turned PM, I have designed the session to provide engineers ( and non-engineers ) with practical Design Thinking skills that can be immediately applied to their work.",
    "co_presenter_info": null
  },
  {
    "id" : "13337",
    "fullname": "Mark Aloo",
    "title_role": "Software Engineer - Safaricom PLC",
    "linkedin_url": "https://www.linkedin.com/in/thecodeinfluencer/",
    "other_social": "https://thecodeinfluencer.dev/",
    "speaker_bio": "Fullstack Engineer with a strong focus on frontend development at Safaricom PLC. Passionate about building intuitive digital experiences, and actively shares expertise through tech talks and blogs, inspiring developers across Africa’s growing tech ecosystem.",
    "speaker_image": "https://thecodeinfluencer.dev/cdn/profile.svg",
    "session_title": "GitHub Spec Kit - Vibe code high-quality software faster.",
    "session_abstract": "Spec Kit is an effort to allow organizations to focus on product scenarios rather than writing undifferentiated code with the help of Spec-Driven Development.",
    "co_presenter_info": null
  },
  {
    "id" : "14337",
    "fullname": "Timothy Mugo",
    "title_role": "Software Engineer",
    "linkedin_url": "https://www.linkedin.com/in/timothygachengo/",
    "other_social": "https://github.com/timothygachengo",
    "speaker_bio": "Passionate about developing software solutions that will help people solve their problems.",
    "speaker_image": "https://vo3gv2h0n9olcv4f.public.blob.vercel-storage.com/spkr-25/timothy_mugo-R97flJuJCsbeyTufkwtNic1vZAlWGF.jpg",
    "session_title": "Expo and Better Auth: Auth that doesn't suck",
    "session_abstract": "Authentication is a key components in modern applications. If you get it wrong, you either frustrate users or invite intruders.\nWith Expo (React Native) powering the next generation of cross-platform apps, developers need solutions that are both hardcore and frictionless. This session looks at better auth as one of the solutions to build auth (sessions, auth and authorization) for your app and your work is to focus on the business logic.",
    "co_presenter_info": null
  },
  {
    "id" : "15337",
    "fullname": "Felix Jumason",
    "title_role": "Noc",
    "linkedin_url": "https://www.linkedin.com/in/felix-jumason-9b209a243/",
    "other_social": "https://twitter.com/blackie_360",
    "speaker_bio": "Felix Jumason is a software developer, open-source contributor, and build-in-public advocate,Active tech community member, he frequently speaks at developer events, sharing insights on web development, APIs, and AI. Passionate about empowering others, Felix contributes to impactful projects and champions collaborative learning through open knowledge sharing",
    "speaker_image": "https://vo3gv2h0n9olcv4f.public.blob.vercel-storage.com/spkr-25/felix_jumason-eULVpTrsxGZHMFco7Xg6oHGoEJZoSO.jpg",
    "session_title": "Building agents with AI SDK ",
    "session_abstract": "The Vercel AI SDK makes it simple to build production-ready AI applications and agents with just a few lines of code. In this session, we’ll explore how the SDK unifies access to multiple AI providers (OpenAI, Anthropic, Google, xAI, Hugging Face, and more), enables structured outputs with type safety, supports real-time streaming, and even allows building autonomous AI agents. Whether you’re building chatbots, dev tools, or AI-driven dashboards, the AI SDK provides a fast track from idea to deployment.The Vercel AI SDK makes it simple to build production-ready AI applications and agents with just a few lines of code. In this session, we’ll explore how the SDK unifies access to multiple AI providers (OpenAI, Anthropic, Google, xAI, Hugging Face, and more), enables structured outputs with type safety, supports real-time streaming, and even allows building autonomous AI agents. Whether you’re building chatbots, dev tools, or AI-driven dashboards, the AI SDK provides a fast track from idea to deployment.",
    "co_presenter_info": null
  },
  {
    "id" : "16337",
    "fullname": "Daniel Gitari",
    "title_role": "DEVOPS ENGINEER",
    "linkedin_url": "https://www.linkedin.com/in/daniel-maina-gitari-464396177/",
    "other_social": "https://www.linkedin.com/in/daniel-maina-gitari-464396177/",
    "speaker_bio": null,
    "speaker_image": "https://vo3gv2h0n9olcv4f.public.blob.vercel-storage.com/spkr-25/daniel_gitari-K17i2tcH7qJVxlPtX2z1awYgjnVcD0.jpg",
    "session_title": "INSTRUMENTATION WITH OPENTELEMETRY ON NEXT JS  APPLICATIONS",
    "session_abstract": "Modern web applications require comprehensive observability to maintain performance, diagnose issues, and ensure optimal user experiences. This session explores implementing OpenTelemetry instrumentation in Next.js applications to achieve end-to-end visibility across your application stack.",
    "co_presenter_info": null
  }
]

export async function GET(request: NextRequest) {
    try {
        return NextResponse.json(speakerData, {
            status: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
            }
        });
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to fetch speaker data' }, 
            { status: 500 });
    }
}


export function OPTIONS(request: NextRequest) {
    return new NextResponse(null, {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        }
    });
}