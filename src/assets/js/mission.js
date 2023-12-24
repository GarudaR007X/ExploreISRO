function showYearContent(year) {
    const timelineEventsContainer = document.getElementById(
        "timelineEventsContainer"
    );
    timelineEventsContainer.innerHTML = "";

    const yearData = {
        2023: [
            {
                title: "Gaganyaan TV-D1",
                imageSrc: "/src/assets/images/launchers/GaganyaanTVD1.jpg.webp",
                description:
                    "Gaganyaan TV-D1 was an uncrewed test flight of the Crew Escape System (CES) for India's Gaganyaan human spaceflight program. It was launched on October 10, 2023, from the Satish Dhawan Space Centre in Sriharikota, India",
                link: "/src/pages/missions/gaganyaan.html",
            },

            {
                title: "Aditya L1 ",
                imageSrc: "/src/assets/images/launchers/adityal1launch.webp",
                description:
                    "Aditya-L1, India's sun-seeking sentinel, orbits at L1, a cosmic crossroads. Its keen eyes, seven instruments strong, pierce the Sun's fiery corona, unraveling its mysteries. ",
                link: "/src/pages/missions/adityal1.html",
            },

            {
                title: "Chandrayaan-3",
                imageSrc: "/src/assets/images/launchers/chandrayaan3launcher.webp",
                description:
                    "Chandrayaan-3, India's lunar waltz, has touched down on the untouched South Pole, etching its name in the moon dust. This audacious feat, a first for India, marks a giant leap in lunar exploration. The nimble rover, Pragyan, now dances across cratered plains, collecting precious soil and unlocking the secrets of water ice hidden within. ",
                link: "/src/pages/missions/chandrayaan3.html",
            },

            {
                title: "RLV-TD",
                imageSrc: "/src/assets/images/launchers/rlv_lex9.jpg.webp",
                description:
                    "RLV-TD, India's winged warrior, takes flight.  Its fiery plume paints the sky, a testament to audacious dreams. Landing like a whisper, it returns to Earth, redefining reusable space travel",
                link: "/src/pages/missions/rlvtd.html",
            },

            {
                title: "OneWeb India-2",
                imageSrc: "/src/assets/images/launchers/oneweb2.webp",
                description:
                    "This successful mission saw 36 OneWeb satellites launched by ISRO's LVM3 rocket, soaring into a low Earth orbit. These tiny giants form part of a global internet network, beaming down high-speed broadband to even the remotest corners of the world.",
                link: "/src/pages/missions/oneweb2.html",
            },
        ],

        2022: [
            {
                title: "EOS-06",
                imageSrc: "/src/assets/images/launchers/eos06.webp",
                description:
                    "EOS-06, India's oceanic sentinel, scans the depths with its eagle eye.  From phytoplankton blooms to swirling currents, its advanced sensors paint a vibrant picture of our dynamic seas.  This marvel of engineering tracks temperature, maps color, and whispers secrets of wind, guiding us towards a healthier, more resilient future",
                link: "/src/pages/missions/eos6.html",
            },

            {
                title: "DS-EO ",
                imageSrc: "/src/assets/images/launchers/dseo.webp",
                description:
                    "DS-EO, launched in June 2022, was a Singapore-owned satellite hitching a ride on India's Polar Satellite Launch Vehicle. Its advanced electro-optical payload captured high-resolution, multi-spectral images, aiding in land classification, map-making, and even disaster relief efforts. ",
                link: "/src/pages/missions/dseo.html",
            },

            {
                title: "EOS-04",
                imageSrc: "/src/assets/images/satellites/eos-04.webp ",
                description:
                    "EOS-04 India's radar imaging satellite, sees through clouds and darkness. Its sharp vision provides invaluable data for Agriculture, Disaster Management,Forestry",
                link: "/src/pages/missions/eos4.html",
            },

            {
                title: "GSAT-24 ",
                imageSrc: "/src/assets/images/launchers/gsat24.jpeg",
                description:
                    "India's GSAT-24 satellite is a game-changer for TV viewers.  It beams down crystal-clear DTH services with sharper picture, 50% more channels, and smoother streaming.  A true symbol of 'Aatmanirbhar Bharat', it's paving the way for future collaborations and enriching entertainment for millions.",
                link: "/src/pages/missions/gsat24.html",
            },
        ],

        2021: [
            {
                title: "EOS-03",
                imageSrc: "/src/assets/images/launchers/eos03.jpeg",
                description:
                    " This state-of-the-art Earth observation satellite was meant to revolutionize India's remote sensing capabilities with its high-resolution imaging and near real-time data",
                link: "/src/pages/missions/eos3.html",
            },

            {
                title: "Amazonia-1",
                imageSrc: "/src/assets/images/launchers/amazonia-1.webp",
                description:
                    "This launch was a significant achievement for both India and Brazil, as it marked the first time ISRO had launched a satellite for another country.",
                link: "/src/pages/missions/amazonia1.html",
            },
        ],

        2020: [
            {
                title: "CMS-01",
                imageSrc: "/src/assets/images/satellites/cms01.jpg",
                description:
                    "CMS-01 is the 50th mission of the Indian Polar Satellite Launch Vehicle (PSLV), and it involves launching a communication satellite named CMS-01. The PSLV is a workhorse launch vehicle developed by the Indian Space Research Organisation (ISRO) for various satellite missions.",
                link: "/src/pages/missions/cms01.html",
            },

            {
                title: "EOS-01",
                imageSrc: "/src/assets/images/satellites/eos1.jpeg",
                description:
                    "EOS-01 is the 49th mission of the Indian Polar Satellite Launch Vehicle (PSLV), with the primary payload being EOS-01. The PSLV is a reliable launch vehicle developed by the Indian Space Research Organisation (ISRO). EOS-01 is likely an Earth observation satellite, as 'EOS' often stands for Earth Observation Satellite.",
                link: "/src/pages/missions/eos1.html",
            },

            {
                title: "GSAT-30",
                imageSrc: "/src/assets/images/satellites/gsat30.webp",
                description:
                    "GSAT-30 is a communication satellite launched by ISRO to provide C-band and Ku-band services for telecommunications and broadcasting in the Indian subcontinent, Gulf countries, and parts of Southeast Asia. It serves as a replacement for the decommissioned INSAT-4A.",
                link: "/src/pages/missions/gsat30.html",
            },
        ],

        2019: [
            {
                title: "RISAT-2BR1",
                imageSrc: "/src/assets/images/satellites/risat-2.jpg",
                description:
                    "RISAT-2BR1 is an ISRO mission where the PSLV-C48 rocket launched the RISAT-2BR1 satellite. RISAT-2BR1 is an Earth observation satellite equipped with synthetic-aperture radar for all-weather monitoring.",
                link: "/src/pages/missions/risat2br1.html",
            },

            {
                title: " Cartosat-3",
                imageSrc: "/src/assets/images/satellites/cartosat3.webp",
                description:
                    "Cartosat-3 is an ISRO mission where the Polar Satellite Launch Vehicle (PSLV-C47) launched the Cartosat-3 satellite. Cartosat-3 is an advanced Earth observation satellite designed for high-resolution imaging and cartographic applications.",
                link: "/src/pages/missions/cartosat3.html",
            },

            {
                title: "Chandrayaan-2",
                imageSrc: "/src/assets/images/satellites/ch2_payload.jpg",
                description:
                    "Chandrayaan-2, India's 2019 lunar mission, aimed to explore the Moon's south polar region with an orbiter, lander (Vikram), and rover (Pragyan). The orbiter continues to function, while the lander and rover experienced communication challenges during descent.",
                link: "/src/pages/missions/chandayaan2.html",
            },

            {
                title: "EMISAT",
                imageSrc: "/src/assets/images/satellites/emisat.webp",
                description:
                    "EMISAT is an Indian military satellite launched in 2019 to gather electronic intelligence (ELINT) data, monitoring signals from radar and communication systems for defense and strategic purposes.",
                link: "/src/pages/missions/emisat.html",
            },

            {
                title: "GSAT-31",
                imageSrc: "/src/assets/images/satellites/gsat31.jpg.webp",
                description:
                    "GSAT-31 is an Indian communication satellite launched in 2019 to provide continuity of services in C-band, extended C-band, and Ku-band for applications like television broadcasting and VSAT communications.",
                link: "/src/pages/missions/gsat31.html",
            },
        ],
    };

    yearData[year].forEach((mission, index) => {
        const container = document.createElement("div");
        container.classList.add("timeline-container");

        const cardContainer = document.createElement("div");
        cardContainer.classList.add("card-container");

        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `<h3>${mission.title}</h3>
         <img src="${mission.imageSrc}" alt="${mission.title} Image">
         <p>${mission.description}</p>
           <a href="${mission.link}" class="read-more-button">Read More</a>`;

        cardContainer.appendChild(card);
        container.appendChild(cardContainer);
        timelineEventsContainer.appendChild(container);
    });
}
