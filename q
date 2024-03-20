[1mdiff --git a/package-lock.json b/package-lock.json[m
[1mindex 7adeade..8af6baf 100644[m
[1m--- a/package-lock.json[m
[1m+++ b/package-lock.json[m
[36m@@ -23,6 +23,7 @@[m
         "react-image-gallery": "^1.3.0",[m
         "react-redux": "^9.1.0",[m
         "react-router-dom": "^6.21.1",[m
[32m+[m[32m        "react-tilt": "^1.0.2",[m
         "styled-components": "^6.1.6"[m
       },[m
       "devDependencies": {[m
[36m@@ -2896,14 +2897,12 @@[m
     "node_modules/@types/prop-types": {[m
       "version": "15.7.11",[m
       "resolved": "https://registry.npmjs.org/@types/prop-types/-/prop-types-15.7.11.tgz",[m
[31m-      "integrity": "sha512-ga8y9v9uyeiLdpKddhxYQkxNDrfvuPrlFb0N1qnZZByvcElJaXthF1UhvCh9TLWJBEHeNtdnbysW7Y6Uq8CVng==",[m
[31m-      "devOptional": true[m
[32m+[m[32m      "integrity": "sha512-ga8y9v9uyeiLdpKddhxYQkxNDrfvuPrlFb0N1qnZZByvcElJaXthF1UhvCh9TLWJBEHeNtdnbysW7Y6Uq8CVng=="[m
     },[m
     "node_modules/@types/react": {[m
       "version": "18.2.57",[m
       "resolved": "https://registry.npmjs.org/@types/react/-/react-18.2.57.tgz",[m
       "integrity": "sha512-ZvQsktJgSYrQiMirAN60y4O/LRevIV8hUzSOSNB6gfR3/o3wCBFQx3sPwIYtuDMeiVgsSS3UzCV26tEzgnfvQw==",[m
[31m-      "devOptional": true,[m
       "dependencies": {[m
         "@types/prop-types": "*",[m
         "@types/scheduler": "*",[m
[36m@@ -2914,7 +2913,6 @@[m
       "version": "18.2.19",[m
       "resolved": "https://registry.npmjs.org/@types/react-dom/-/react-dom-18.2.19.tgz",[m
       "integrity": "sha512-aZvQL6uUbIJpjZk4U8JZGbau9KDeAwMfmhyWorxgBkqDIEf6ROjRozcmPIicqsUwPUjbkDfHKgGee1Lq65APcA==",[m
[31m-      "dev": true,[m
       "dependencies": {[m
         "@types/react": "*"[m
       }[m
[36m@@ -2922,8 +2920,7 @@[m
     "node_modules/@types/scheduler": {[m
       "version": "0.16.8",[m
       "resolved": "https://registry.npmjs.org/@types/scheduler/-/scheduler-0.16.8.tgz",[m
[31m-      "integrity": "sha512-WZLiwShhwLRmeV6zH+GkbOFT6Z6VklCItrDioxUnv+u4Ll+8vKeFySoFyK/0ctcRpOmwAicELfmys1sDc/Rw+A==",[m
[31m-      "devOptional": true[m
[32m+[m[32m      "integrity": "sha512-WZLiwShhwLRmeV6zH+GkbOFT6Z6VklCItrDioxUnv+u4Ll+8vKeFySoFyK/0ctcRpOmwAicELfmys1sDc/Rw+A=="[m
     },[m
     "node_modules/@types/semver": {[m
       "version": "7.5.7",[m
[36m@@ -3840,8 +3837,7 @@[m
     "node_modules/csstype": {[m
       "version": "3.1.3",[m
       "resolved": "https://registry.npmjs.org/csstype/-/csstype-3.1.3.tgz",[m
[31m-      "integrity": "sha512-M1uQkMl8rQK/szD0LNhtqxIPLpimGm8sOBwU7lLnCpSbTyY3yeU1Vc7l4KT5zT4s/yOxHH5O7tIuuLOCnLADRw==",[m
[31m-      "devOptional": true[m
[32m+[m[32m      "integrity": "sha512-M1uQkMl8rQK/szD0LNhtqxIPLpimGm8sOBwU7lLnCpSbTyY3yeU1Vc7l4KT5zT4s/yOxHH5O7tIuuLOCnLADRw=="[m
     },[m
     "node_modules/damerau-levenshtein": {[m
       "version": "1.0.8",[m
[36m@@ -6225,6 +6221,17 @@[m
         "react-dom": ">=16.8"[m
       }[m
     },[m
[32m+[m[32m    "node_modules/react-tilt": {[m
[32m+[m[32m      "version": "1.0.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/react-tilt/-/react-tilt-1.0.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-21tUUsmuw5id/6NDtKqwYTG4taVnw+BoUwIG6YsgPC9GI6cx4BnBuSqgriQYAYcv3bdGNzecaBL+rvQRAm28bg==",[m
[32m+[m[32m      "peerDependencies": {[m
[32m+[m[32m        "@types/react": "^18.0.29",[m
[32m+[m[32m        "@types/react-dom": "^18.0.11",[m
[32m+[m[32m        "react": "^18.2.0",[m
[32m+[m[32m        "react-dom": "^18.2.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
     "node_modules/redux": {[m
       "version": "5.0.1",[m
       "resolved": "https://registry.npmjs.org/redux/-/redux-5.0.1.tgz",[m
[36m@@ -9064,14 +9071,12 @@[m
     "@types/prop-types": {[m
       "version": "15.7.11",[m
       "resolved": "https://registry.npmjs.org/@types/prop-types/-/prop-types-15.7.11.tgz",[m
[31m-      "integrity": "sha512-ga8y9v9uyeiLdpKddhxYQkxNDrfvuPrlFb0N1qnZZByvcElJaXthF1UhvCh9TLWJBEHeNtdnbysW7Y6Uq8CVng==",[m
[31m-      "devOptional": true[m
[32m+[m[32m      "integrity": "sha512-ga8y9v9uyeiLdpKddhxYQkxNDrfvuPrlFb0N1qnZZByvcElJaXthF1UhvCh9TLWJBEHeNtdnbysW7Y6Uq8CVng=="[m
     },[m
     "@types/react": {[m
       "version": "18.2.57",[m
       "resolved": "https://registry.npmjs.org/@types/react/-/react-18.2.57.tgz",[m
       "integrity": "sha512-ZvQsktJgSYrQiMirAN60y4O/LRevIV8hUzSOSNB6gfR3/o3wCBFQx3sPwIYtuDMeiVgsSS3UzCV26tEzgnfvQw==",[m
[31m-      "devOptional": true,[m
       "requires": {[m
         "@types/prop-types": "*",[m
         "@types/scheduler": "*",[m
[36m@@ -9082,7 +9087,6 @@[m
       "version": "18.2.19",[m
       "resolved": "https://registry.npmjs.org/@types/react-dom/-/react-dom-18.2.19.tgz",[m
       "integrity": "sha512-aZvQL6uUbIJpjZk4U8JZGbau9KDeAwMfmhyWorxgBkqDIEf6ROjRozcmPIicqsUwPUjbkDfHKgGee1Lq65APcA==",[m
[31m-      "dev": true,[m
       "requires": {[m
         "@types/react": "*"[m
       }[m
[36m@@ -9090,8 +9094,7 @@[m
     "@types/scheduler": {[m
       "version": "0.16.8",[m
       "resolved": "https://registry.npmjs.org/@types/scheduler/-/scheduler-0.16.8.tgz",[m
[31m-      "integrity": "sha512-WZLiwShhwLRmeV6zH+GkbOFT6Z6VklCItrDioxUnv+u4Ll+8vKeFySoFyK/0ctcRpOmwAicELfmys1sDc/Rw+A==",[m
[31m-      "devOptional": true[m
[32m+[m[32m      "integrity": "sha512-WZLiwShhwLRmeV6zH+GkbOFT6Z6VklCItrDioxUnv+u4Ll+8vKeFySoFyK/0ctcRpOmwAicELfmys1sDc/Rw+A=="[m
     },[m
     "@types/semver": {[m
       "version": "7.5.7",[m
[36m@@ -9723,8 +9726,7 @@[m
     "csstype": {[m
       "version": "3.1.3",[m
       "resolved": "https://registry.npmjs.org/csstype/-/csstype-3.1.3.tgz",[m
[31m-      "integrity": "sha512-M1uQkMl8rQK/szD0LNhtqxIPLpimGm8sOBwU7lLnCpSbTyY3yeU1Vc7l4KT5zT4s/yOxHH5O7tIuuLOCnLADRw==",[m
[31m-      "devOptional": true[m
[32m+[m[32m      "integrity": "sha512-M1uQkMl8rQK/szD0LNhtqxIPLpimGm8sOBwU7lLnCpSbTyY3yeU1Vc7l4KT5zT4s/yOxHH5O7tIuuLOCnLADRw=="[m
     },[m
     "damerau-levenshtein": {[m
       "version": "1.0.8",[m
[36m@@ -11389,6 +11391,12 @@[m
         "react-router": "6.22.1"[m
       }[m
     },[m
[32m+[m[32m    "react-tilt": {[m
[32m+[m[32m      "version": "1.0.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/react-tilt/-/react-tilt-1.0.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-21tUUsmuw5id/6NDtKqwYTG4taVnw+BoUwIG6YsgPC9GI6cx4BnBuSqgriQYAYcv3bdGNzecaBL+rvQRAm28bg==",[m
[32m+[m[32m      "requires": {}[m
[32m+[m[32m    },[m
     "redux": {[m
       "version": "5.0.1",[m
       "resolved": "https://registry.npmjs.org/redux/-/redux-5.0.1.tgz",[m
[1mdiff --git a/package.json b/package.json[m
[1mindex 6b3379c..33bd411 100644[m
[1m--- a/package.json[m
[1m+++ b/package.json[m
[36m@@ -24,6 +24,7 @@[m
     "react-image-gallery": "^1.3.0",[m
     "react-redux": "^9.1.0",[m
     "react-router-dom": "^6.21.1",[m
[32m+[m[32m    "react-tilt": "^1.0.2",[m
     "styled-components": "^6.1.6"[m
   },[m
   "devDependencies": {[m
[1mdiff --git a/src/features/footer/Footer.jsx b/src/features/footer/Footer.jsx[m
[1mindex 500c0c0..68ae9d6 100644[m
[1m--- a/src/features/footer/Footer.jsx[m
[1m+++ b/src/features/footer/Footer.jsx[m
[36m@@ -17,7 +17,6 @@[m [mconst Enfo = styled.div`[m
 [m
 const SectionContact = styled.section`[m
   background-color: var(--color-balck);[m
[31m-  height: 100vh;[m
   color: var(--color-white);[m
 `;[m
 [m
[1mdiff --git a/src/features/projects/CardGrid.jsx b/src/features/projects/CardGrid.jsx[m
[1mindex 64b6b65..4192af4 100644[m
[1m--- a/src/features/projects/CardGrid.jsx[m
[1m+++ b/src/features/projects/CardGrid.jsx[m
[36m@@ -1,17 +1,29 @@[m
[31m-import React, { useRef } from "react";[m
[32m+[m[32mimport React from "react";[m
 import { Link } from "react-router-dom";[m
 import styled from "styled-components";[m
 [m
[32m+[m[32mimport { Tilt } from "react-tilt";[m
[32m+[m
[32m+[m[32mconst defaultOptions = {[m
[32m+[m[32m  reverse: false, // reverse the tilt direction[m
[32m+[m[32m  max: 35, // max tilt rotation (degrees)[m
[32m+[m[32m  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.[m
[32m+[m[32m  scale: 1, // 2 = 200%, 1.5 = 150%, etc..[m
[32m+[m[32m  speed: 1000, // Speed of the enter/exit transition[m
[32m+[m[32m  transition: true, // Set a transition on enter/exit.[m
[32m+[m[32m  axis: null, // What axis should be disabled. Can be X or Y.[m
[32m+[m[32m  reset: true, // If the tilt effect has to be reset on exit.[m
[32m+[m[32m  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.[m
[32m+[m[32m};[m
[32m+[m
 const CardContainer = styled.div`[m
   border-radius: 10px;[m
[31m-  padding: 1.5rem;[m
   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);[m
[31m-  transition: transform 0.3s, box-shadow 0.3s;[m
[32m+[m[32m  transition: transform 0.5s, box-shadow 0.3s;[m
   transform-style: preserve-3d;[m
   position: relative;[m
   cursor: pointer;[m
   transform-origin: center center;[m
[31m-  perspective: 1500px;[m
 [m
   &:hover {[m
     box-shadow: 0 5px 20px 5px #00000044;[m
[36m@@ -20,52 +32,36 @@[m [mconst CardContainer = styled.div`[m
 [m
 const CardImage = styled.img`[m
   width: 100%;[m
[31m-  height: auto;[m
[31m-  border-radius: 10px;[m
[32m+[m[32m  height: 50%;[m
[32m+[m[32m  object-fit: cover;[m
[32m+[m[32m  border-radius: 10px 10px 0 0;[m
   pointer-events: none;[m
 `;[m
 [m
 const CardHeading = styled.h2`[m
[31m-  font-size: 1.5rem;[m
[32m+[m[32m  font-size: 4.2rem;[m
   margin-bottom: 0.5rem;[m
[32m+[m[32m  padding: 2rem;[m
[32m+[m[32m  color: var(--color-white);[m
 `;[m
 [m
 const CardSubheading = styled.p`[m
[31m-  font-size: 1rem;[m
[31m-  color: gray;[m
[32m+[m[32m  font-size: 1.6rem;[m
[32m+[m[32m  color: var(--color-white);[m
[32m+[m[32m  padding: 0 2rem 2rem;[m
 `;[m
 [m
 const CardGrid = ({ heading, subheading, imgSrc, href }) => {[m
[31m-  const cardRef = useRef(null);[m
[31m-[m
[31m-  const rotate = (e) => {[m
[31m-    const card = cardRef.current;[m
[31m-    const cardItem = card.querySelector(".card-item");[m
[31m-    const rect = card.getBoundingClientRect();[m
[31m-    const halfWidth = rect.width / 2;[m
[31m-    const halfHeight = rect.height / 2;[m
[31m-    const offsetX = e.clientX - rect.left;[m
[31m-    const offsetY = e.clientY - rect.top;[m
[31m-    const rotateX = -(offsetY - halfHeight) / 7;[m
[31m-    const rotateY = (offsetX - halfWidth) / 7;[m
[31m-    cardItem.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;[m
[31m-  };[m
[31m-[m
[31m-  const stopRotate = () => {[m
[31m-    const cardItem = cardRef.current.querySelector(".card-item");[m
[31m-    cardItem.style.transform = "rotateX(0) rotateY(0)";[m
[31m-  };[m
[31m-[m
   return ([m
[31m-    <Link to={href}>[m
[31m-      <CardContainer ref={cardRef} onMouseMove={rotate} onMouseOut={stopRotate}>[m
[31m-        <div className="card-item">[m
[32m+[m[32m    <Tilt options={defaultOptions}>[m
[32m+[m[32m      <Link to={href}>[m
[32m+[m[32m        <CardContainer>[m
           <CardImage src={imgSrc} alt={heading} />[m
           <CardHeading>{heading}</CardHeading>[m
           <CardSubheading>{subheading}</CardSubheading>[m
[31m-        </div>[m
[31m-      </CardContainer>[m
[31m-    </Link>[m
[32m+[m[32m        </CardContainer>[m
[32m+[m[32m      </Link>[m
[32m+[m[32m    </Tilt>[m
   );[m
 };[m
 [m
[1mdiff --git a/src/features/projects/MyProjects.jsx b/src/features/projects/MyProjects.jsx[m
[1mindex e479f40..2096a04 100644[m
[1m--- a/src/features/projects/MyProjects.jsx[m
[1m+++ b/src/features/projects/MyProjects.jsx[m
[36m@@ -23,7 +23,7 @@[m [mconst ListContainer = styled.div`[m
 const GridContainer = styled.div`[m
   display: grid;[m
   grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));[m
[31m-  gap: 2rem;[m
[32m+[m[32m  gap: 4rem;[m
 `;[m
 [m
 const MyProjects = ({ style, element, color, displayMode = "list" }) => {[m
[1mdiff --git a/src/pages/Home.jsx b/src/pages/Home.jsx[m
[1mindex 30e8218..b036170 100644[m
[1m--- a/src/pages/Home.jsx[m
[1m+++ b/src/pages/Home.jsx[m
[36m@@ -44,7 +44,7 @@[m [mfunction Home() {[m
         <ShowMore>[m
           <MainButton>[m
             <Link to="/projects" onClick={() => window.scrollTo(0, 0)}>[m
[31m-              Show more[m
[32m+[m[32m              <span>Show more</span>[m
             </Link>[m
           </MainButton>[m
         </ShowMore>[m
[36m@@ -124,9 +124,17 @@[m [mconst ShowMore = styled.div`[m
   padding: 3rem;[m
   a {[m
     color: var(--color-white);[m
[31m-    font-size: 3rem;[m
[32m+[m[32m    font-size: 2rem;[m
     font-weight: 500;[m
   }[m
[32m+[m
[32m+[m[32m  span {[m
[32m+[m[32m    margin: 0 1rem;[m
[32m+[m[32m    background-color: var(--color-white);[m
[32m+[m[32m    color: var(--color-primary-3);[m
[32m+[m[32m    padding: 0.5rem 1.5rem;[m
[32m+[m[32m    border-radius: 100rem;[m
[32m+[m[32m  }[m
 `;[m
 [m
 const paragraph =[m
[1mdiff --git a/src/pages/Projects.jsx b/src/pages/Projects.jsx[m
[1mindex 9bddd24..e741b53 100644[m
[1m--- a/src/pages/Projects.jsx[m
[1m+++ b/src/pages/Projects.jsx[m
[36m@@ -3,6 +3,10 @@[m [mimport transition from "../hooks/animation";[m
 import styled from "styled-components";[m
 import MyProjects from "../features/projects/MyProjects";[m
 import Footer from "../features/footer/Footer";[m
[32m+[m[32mimport { useSearchParams } from "react-router-dom";[m
[32m+[m[32mimport { CiBoxList } from "react-icons/ci";[m
[32m+[m[32mimport { IoGridOutline } from "react-icons/io5";[m
[32m+[m[32mimport HoverButton from "../ui/HoverButton";[m
 [m
 const Container = styled.div`[m
   max-width: 120rem;[m
[36m@@ -17,7 +21,7 @@[m [mconst Container = styled.div`[m
 const ButtonContainer = styled.div`[m
   margin-top: 2rem;[m
   display: flex;[m
[31m-  justify-content: center;[m
[32m+[m[32m  justify-content: end;[m
 `;[m
 [m
 const Button = styled.button`[m
[36m@@ -30,6 +34,10 @@[m [mconst Button = styled.button`[m
   border-radius: 0.5rem;[m
   cursor: pointer;[m
   transition: background-color 0.3s, color 0.3s;[m
[32m+[m[32m  display: flex;[m
[32m+[m[32m  align-items: center;[m
[32m+[m[32m  justify-content: center;[m
[32m+[m[32m  gap: 0.5rem;[m
 [m
   &:hover {[m
     background-color: var(--color-primary-3);[m
[36m@@ -38,14 +46,20 @@[m [mconst Button = styled.button`[m
 `;[m
 [m
 function Projects() {[m
[31m-  const [displayMode, setDisplayMode] = useState("list");[m
[32m+[m[32m  const [searchParams, setSearchParams] = useSearchParams();[m
[32m+[m[32m  const view = searchParams.get("view" || "list");[m
[32m+[m[32m  const [displayMode, setDisplayMode] = useState(view);[m
 [m
   const handleListButtonClick = () => {[m
     setDisplayMode("list");[m
[32m+[m[32m    searchParams.set("view", "list");[m
[32m+[m[32m    setSearchParams({ view: "list" });[m
   };[m
 [m
   const handleGridButtonClick = () => {[m
     setDisplayMode("grid");[m
[32m+[m[32m    searchParams.set("view", "grid");[m
[32m+[m[32m    setSearchParams({ view: "grid" });[m
   };[m
 [m
   return ([m
[36m@@ -53,8 +67,16 @@[m [mfunction Projects() {[m
       <h1>My Projects</h1>[m
 [m
       <ButtonContainer>[m
[31m-        <Button onClick={handleListButtonClick}>List View</Button>[m
[31m-        <Button onClick={handleGridButtonClick}>Grid View</Button>[m
[32m+[m[32m        <HoverButton>[m
[32m+[m[32m          <Button onClick={handleListButtonClick}>[m
[32m+[m[32m            <CiBoxList /> List View[m
[32m+[m[32m          </Button>[m
[32m+[m[32m        </HoverButton>[m
[32m+[m[32m        <HoverButton>[m
[32m+[m[32m          <Button onClick={handleGridButtonClick}>[m
[32m+[m[32m            <IoGridOutline /> Grid View[m
[32m+[m[32m          </Button>[m
[32m+[m[32m        </HoverButton>[m
       </ButtonContainer>[m
 [m
       <MyProjects[m
[1mdiff --git a/src/styles/GlobalStyles.js b/src/styles/GlobalStyles.js[m
[1mindex ec59358..1b985a6 100644[m
[1m--- a/src/styles/GlobalStyles.js[m
[1m+++ b/src/styles/GlobalStyles.js[m
[36m@@ -57,7 +57,6 @@[m [mbody {[m
   font-family: "Roboto Condensed", sans-serif;[m
   font-size: 1.6rem;[m
   background-color: #9CA9B9;[m
[31m-  perspective: 1500px;[m
 }[m
 [m
 [m
