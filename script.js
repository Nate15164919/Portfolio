/* ---------------------------
Debut
---------------------------- */

const $ = (q, root = document) => root.querySelector(q);
const $$ = (q, root = document) => [...root.querySelectorAll(q)];

const App = {
    state: {
        active: "home",
        drawer: false,
        modal: false,
        skillFilter: "all",
        skillPage: 0,
        projectFilter: "all",
        projectPage: 0,
        docFilter: "all",
        docPage: 0,
        certFilter: "all",
        certPage: 0,
    },
    data: {
        email: "contact.pro@nathaniel-t.fr",
        snippetSISR: `L’option Solutions d’Infrastructure, Systèmes et Réseaux est dédiée à l'administration des systèmes et des réseaux. 
Elle forme des professionnels capables de concevoir, installer, maintenir et sécuriser l'infrastructure informatique d'une entreprise (serveurs, équipements réseaux, cloud, cybersécurité).`,
        snippetSLAM: `L’option Solutions Logicielles et Applications est centrée sur le développement logiciel. 
Elle prépare à la conception, la programmation et la maintenance d'applications (web, mobiles, lourdes), ainsi qu'à la conception et l'exploitation de bases de données.`,
        snippetCyber: `La cybersécurité est un pilier du BTS SIO via un bloc de compétences commun obligatoire. 
L'option SISR se concentre sur la protection des réseaux et infrastructures, tandis que l'option SLAM privilégie le développement d'applications sécurisées et la protection des données. 
C'est une formation clé pour acquérir les réflexes techniques nécessaires à la prévention des cyberattaques et à la sécurisation du système d'information de l'entreprise.`,
/*----------------- Competences  -----------------*/
        skills: [
            {
                group: "os",
                icon: "fa-brands fa-linux",
                name: "Linux",
                pct: 90,
                tags: ["Ubuntu", "Kali", "Debian", "Bash", "Shell"],
            },
            {
                group: "os",
                icon: "fa-brands fa-microsoft",
                name: "Windows",
                pct: 85,
                tags: ["Windows Server 22/25", "Windows 10/11"],
            },
            {
                group: "os",
                icon: "fa-brands fa-apple",
                name: "MacOS",
                pct: 80,
                tags: ["Terminal", "Tahoe", "Xcode"],
            },
            {
                group: "admin",
                icon: "fa-solid fa-server",
                name: "Domaine Windows",
                pct: 93,
                tags: ["AD", "GPO", "RSAT", "LDAP"],
            },
            {
                group: "admin",
                icon: "fa-solid fa-cloud",
                name: "Services d'infrastructure",
                pct: 90,
                tags: ["DHCP", "DNS", "SFTP", "SSH"],
            },

            {
                group: "admin",
                icon: "fa-solid fa-network-wired",
                name: "Adressage et routage",
                pct: 91,
                tags: ["IPv4", "IPv6", "Routage statique/dynamique"],
            },
            {
                group: "admin",
                icon: "fa-solid fa-network-wired",
                name: "Segmentation",
                pct: 87,
                tags: ["VLAN", "Trunking (802.1Q)", "STP", "NAT"],
            },
            {
                group: "admin",
                icon: "fa-solid fa-building-shield",
                name: "Sécurité réseau",
                pct: 84,
                tags: ["Firewall", "IDS", "IPS", "SSL"],
            },

            {
                group: "virtu",
                icon: "fa-solid fa-house-laptop",
                name: "Proxmox",
                pct: 76,
                tags: ["VM", "Cluster", "Docker"],
            },
            {
                group: "virtu",
                icon: "fa-solid fa-ticket",
                name: "GLPI",
                pct: 88,
                tags: ["Ticketing", "Support", "Suivi"],
            },
            {
                group: "virtu",
                icon: "fa-solid fa-heart-pulse",
                name: "Zabbix",
                pct: 75,
                tags: ["Supervision", "Monitoring", "Profiling"],
            },
            {
                group: "dev",
                icon: "fa-brands fa-git-alt",
                name: "Git",
                pct: 92,
                tags: ["Flow", "Reviews", "Releases"],
            },
            {
                group: "dev",
                icon: "fa-brands fa-windows",
                name: "PowerShell",
                pct: 65,
                tags: ["Automatisation", "Programmes", "Scripts"],
            },
            {
                group: "dev",
                icon: "fa-brands fa-wordpress",
                name: "WordPress",
                pct: 95,
                tags: ["Installation", "Plugins", "Administration"],
            },
            {
                group: "dev",
                icon: "fa-solid fa-database",
                name: "Web & Base de données",
                pct: 80,
                tags: ["MySQL", "Nginx", "Administration", "PHP"],
            },
            {
                group: "dev",
                icon: "fa-solid fa-code",
                name: "Bases en programmation",
                pct: 70,
                tags: ["Python", "HTML/CSS", "JavaScript", "JSON"],
            },
        ],
/*----------------- Work  -----------------*/
        timeline: [
            {
                role: "Administrateur Systèmes et Réseaux",
                org: "Actuellement en recherche",
                period: "2026 - 2027",
                icon: "fa-solid fa-briefcase",
                bullets: [
                    "Je suis à la recherche d'une alternance pour mon Bac +3 en tant qu'Administrateur Systèmes et Réseaux",
                    "Pour une période de 1 an minimum à partir de septembre 2026.",
                    "Je suis motivé à mettre en pratique mes compétences en administration systèmes et réseaux, ainsi qu'à apprendre de nouvelles technologies et méthodologies dans un environnement professionnel stimulant.",
                ],
            },
            {
                role: "Technicien Systèmes et Réseaux",
                org: "Tertio Engineering",
                period: "Janvier - Mars 2026 | STAGE",
                icon: "fa-solid fa-wrench",
                bullets: [
                    "Ingénierie Open Source : Conception et déploiement d'une infrastructure souveraine sous Debian avec Active Directory (Samba 4) et environnement collaboratif (Nextcloud, LDAP).",
                    "Études de cas sur <a href='https://drive.proton.me/urls/6CK9B1QDFM#FXYjFcnOtS82' target='_blank' rel='noopener noreferrer' style='color: #b4a0ff'>l'alternative aux GAFAM</a>",
                    "Migration Serveur : Pilotage d'une migration critique sans coupure de Windows Server 2003 vers 2022, incluant le transfert des rôles FSMO en PowerShell.",
                    "Support & MCO : Supervision proactive de l'infrastructure, maintien en condition opérationnelle et assistance technique aux utilisateurs.",
                ],
            },
            {
                role: "Technicien Support Informatique",
                org: "Tertio Engineering",
                period: "Avril - Juin 2025 | STAGE",
                icon: "fa-solid fa-ticket",
                bullets: [
                    "Gestion de parc : Audit, remise à neuf et déploiement à grande échelle d'équipements informatiques.",
                    "Réseau & Stockage : Configuration de serveurs NAS sécurisés (RAID 1), gestion des règles pare-feu et diagnostics de performances réseau.",
                    "Innovation : Automatisation des remontées d'incidents matériels et déploiement d'une IA locale (LLM) sur serveur de stockage.",
                ],
            },
        ],
/*----------------- Projet  -----------------*/
        projects: [
            {
                title: "AP-4",
                category: "atelier",
                desc: "Atelier de Professionnalisation 4 : Mise en place d’un outil de Load Balancing HAProxy.",
                cover: "FIles/Images/Projets/haproxy.png",
                stack: ["HAProxy", "Nginx", "Debian"],
                meta: "Rapport de projet • 2026",
                bullets: [
                    "Travail collaboratif (équipe de 5) visant à concevoir et intégrer une infrastructure réseau complète répondant aux besoins de la Maison des Ligues (M2L).",
                    "Mise en place d’un outil de Load Balancing HAProxy.",
                    "Configuration et optimisation du service HAProxy.",
                ],
                links: [
                    {
                        label: "Rapport de projet",
                        icon: "fa-solid fa-file-pdf",
                        href: "Projet/AP-4/haproxy.pdf",
                    },
                    {
                        label: "Infrastructure HAProxy",
                        icon: "fa-solid fa-image",
                        href: "Projet/AP-4/haproxy.png",
                    },
                    {
                        label: "Documentation",
                        icon: "fa-solid fa-folder-open",
                        href: "Projet/Docu-Liens/haproxy.html",
                    },
                ],
            },
            {
                title: "AP-3",
                category: "atelier",
                desc: "Atelier de Professionnalisation 3 : Mise en place d’un serveur VPN avec WireGuard.",
                cover: "FIles/Images/Projets/wire.png",
                stack: ["WireGuard", "SSH", "VPN"],
                meta: "Rapport de projet • 2025",
                bullets: [
                    "Travail collaboratif (équipe de 5) visant à concevoir et intégrer une infrastructure réseau complète répondant aux besoins de la Maison des Ligues (M2L).",
                    "Mise en place d’un serveur VPN avec WireGuard.",
                    "Configuration et optimisation du service WireGuard.",
                ],
                links: [
                    {
                        label: "Rapport de projet",
                        icon: "fa-solid fa-file-pdf",
                        href: "Projet/AP-3/wireguard.pdf",
                    },
                    {
                        label: "Infrastructure du VPN",
                        icon: "fa-solid fa-image",
                        href: "Projet/AP-3/vpn.png",
                    },
                    {
                        label: "Documentation",
                        icon: "fa-solid fa-folder-open",
                        href: "Projet/Docu-Liens/wireguard.html",
                    },
                ],
            },
            {
                title: "AP-2",
                category: "atelier",
                desc: "Atelier de Professionnalisation 2 : Étude théorique pour l'organisation 'Maison des Ligues de Lorraine' (M2L)",
                cover: "FIles/Images/Projets/ap-2-back.jpg",
                stack: ["Gestion de projet", "Communication technique", "Analyse de besoins"],
                meta: "Rapport de projet • 2025",
                bullets: [
                    "L'objectif était de répondre à deux problématiques techniques majeures en proposant un comparatif de trois solutions distinctes. Ce travail préparatoire visait à sélectionner la stratégie la plus pertinente en vue d'un déploiement réel sur infrastructure physique en deuxième année (AP3).",
                    "Le projet avait pour but de choisir une solution pour les 2 problématiques suivantes : choisir un serveur DHCP et choisir une solution de supervision pour l'infrastructure réseau de la M2L.",
                    "Ma contribution : J'ai mené une analyse approfondie des besoins et des contraintes techniques, en évaluant les différentes options disponibles pour répondre aux problématiques identifiées. J'ai ensuite synthétisé ces informations dans un comparatif clair et structuré, mettant en avant les avantages et les inconvénients de chaque solution.",
                ],
                links: {
                    "Solution DHCP": [
                        { label: "Solution retenue (DHCP WDS)", icon: "fa-solid fa-file-pdf", href: "Projet/AP-2/DHCP-wds_final.pdf" },
                        { label: "Ma solution (DHCP WDS)", icon: "fa-solid fa-file-pdf", href: "Projet/AP-2/DHCP-Windows-1.pdf" },
                        { label: "DHCP Radius", icon: "fa-solid fa-file-pdf", href: "Projet/AP-2/DHCP-Radius-1.pdf" },
                        { label: "DHCP avec ISC", icon: "fa-solid fa-file-pdf", href: "Projet/AP-2/DHCPisc-linux.pdf" },
                    ],
                    "Solution serveur de supervision": [
                        { label: "Solution retenue (Zabbix)", icon: "fa-solid fa-file-pdf", href: "Projet/AP-2/supp-zabbix_final.pdf" },
                        { label: "Ma solution (Nagios)", icon: "fa-solid fa-file-pdf", href: "Projet/AP-2/supp-nagios.pdf" },
                        { label: "PRTG Network Monitor", icon: "fa-solid fa-file-pdf", href: "Projet/AP-2/supp-docu-rptg.pdf" },
                        { label: "Zabbix", icon: "fa-solid fa-file-pdf", href: "Projet/AP-2/supp-zabbix.pdf" },
                    ],
                },
            },
            {
                title: "AP-1",
                category: "atelier",
                desc: "Atelier de Professionnalisation 1 : Création d'un site web pour une exposition temporaire sur le Brutalisme.",
                cover: "Projet/AP-1/bruta/images/home.jpg",
                stack: ["HTML5", "CSS3", "Figma"],
                meta: "Rapport de projet • 2024",
                bullets: [
                    "Réalisé en équipe de 4 personnes, ce projet consistait à simuler la création de A à Z d'une entreprise spécialisée dans l'organisation d'expositions. Notre choix s'est porté sur la conception d'un événement immersif autour du brutalisme. Pendant que mes collaborateurs géraient la partie administrative, la documentation et la gestion de projet globale, j'ai pris en charge l'intégralité du volet digital.",
                    "Mon rôle : Développeur Front-End. J'ai conçu et développé le site web promotionnel dédié à cette exposition temporaire, avec pour objectif de donner un 'avant-goût' visuel et interactif de l'événement aux visiteurs.",
                    "Réalisations : Intégration complète de l'interface à partir des maquettes Figma. Ce projet m'a permis d'appliquer les bonnes pratiques du développement Front-End, de respecter le design system initial et de consolider fortement mes bases techniques.",
                    "Axes d'amélioration envisagés : Afin de faire évoluer ce projet, j'ai identifié deux axes de travail majeurs :",
                    "Expérience Utilisateur (UX) : Optimisation du code CSS/JS pour corriger un bug de défilement (scroll) qui se bloque à certains endroits de la page.",
                    "Développement Back-End : Création d'une base de données et développement de la logique serveur pour rendre le système de réservation fonctionnel (stockage des commandes et automatisation de l'envoi des billets par e-mail).",
                ],
                links: [
                    {
                        label: "Le projet",
                        icon: "fa-solid fa-arrow-up-right-from-square",
                        href: "Projet/AP-1/bruta/home.html",
                    },
                    {
                        label: "Code",
                        icon: "fa-brands fa-github",
                        href: "https://github.com/Nate15164919/Portfolio/tree/main/Projet/AP-1/bruta",
                    },
                ],
            },
            {
                title: "Projet-Citoyen",
                category: "atelier",
                desc: "Projet citoyen : Comment la société essaie de s’adapter aux Personnes à Mobilité Réduite ?",
                cover: "FIles/Images/Projets/presBG.jpg",
                stack: ["Travail d'équipe", "Communication technique", "Analyse de besoins"],
                meta: "Rapport de projet • 2025",
                bullets: [
                    "Travail collaboratif visant à analyser et répondre à des problématiques sociétales concrètes concernant les Personnes à Mobilité Réduite (PMR). Le projet a été mené au sein d'une équipe pluridisciplinaire de 6 personnes (3 profils infrastructure réseaux et 3 profils développement).",
                    "Rédaction de deux articles ciblés sur l'inclusion et l'accessibilité : ",
                    "L'accessibilité des transports en commun parisiens pour les PMR.",
                    "L'aménagement de l'espace public dans la ville de Plaisir.",
                    "Conception technique : Participation à la création d'un site web interactif pour centraliser et mettre en valeur les articles du groupe.",
                    "Restitution du travail accompli lors d'une présentation orale.",
                ],
                links: [
                    {
                        label: "Le projet",
                        icon: "fa-solid fa-arrow-up-right-from-square",
                        href: "Projet/Projet-Citoyen/projet-citoyen/index.html",
                    },
                    {
                        label: "Code",
                        icon: "fa-brands fa-github",
                        href: "https://github.com/Nate15164919/Portfolio/tree/main/Projet/Projet-Citoyen/projet-citoyen",
                    },
                    {
                        label: "Travail de Groupe",
                        icon: "fa-brands fa-google-drive",
                        href: "https://docs.google.com/document/d/1JJ_9XtND3sMGBSaHy9B4t7q74PuVGtkVJ8ACfz2lhiQ/edit?tab=t.0#heading=h.gybs4ysq77if",
                    },
                ],
            },
            {
                title: "Exercice sur les VLAN",
                category: "exercice",
                desc: "Observation du trafic de diffusion d'un VLAN",
                cover: "FIles/Images/Autres/switch.avif",
                stack: ["Switch", "VLAN", "Observation"],
                meta: "Exercice • 2025",
                bullets: [
                    "Observation du trafic de diffusion d'un VLAN.",
                    "Identification des problèmes de communication entre les postes.",
                ],
                links: [
                    {
                        label: "Exercice",
                        icon: "fa-solid fa-file-pdf",
                        href: "Projet/Exercices/exo-vlan.pdf",
                    }
                ],
            },
            {
                title: "CTF avec BurpSuite",
                category: "exercice",
                desc: "Pratique de pentest avec BurpSuite",
                cover: "FIles/Images/Autres/burp.png",
                stack: ["BurpSuite", "Pentest", "Sécurité"],
                meta: "Exercice • 2025",
                bullets: [
                    "Pratique de pentest avec BurpSuite.",
                    "Identification des vulnérabilités dans une application web.",
                ],
                links: [
                    {
                        label: "Exercice",
                        icon: "fa-solid fa-file-pdf",
                        href: "Projet/Exercices/burp-nathaniel.pdf",
                    }
                ],
            },
        ],
/*----------------- Documentation  -----------------*/
        documentation: [
            {
                title: "Migration Windows Server 2022",
                category: "windows",
                desc: "Procédures complètes et guide de migration vers Windows Server 2022.",
                cover: "FIles/Images/Docu/windows-server.jpeg",
                stack: ["Windows Server", "AD", "Migration"],
                meta: "Rapport et documentation technique • 2026",
                bullets: [
                    "Analyse de l'existant et planification des étapes de migration.",
                    "Rédaction des procédures de sauvegarde et de restauration.",
                    "Guide de résolution des incidents post-migration."
                ],
                links: [
                    {
                        label: "Voir la documentation",
                        icon: "fa-solid fa-file-pdf",
                        href: "https://drive.proton.me/urls/SR4HA7DTQM#CStmR4ob1FKD"
                    }
                ]
            },
            {
                title: "Déploiement d'une PKI d'Entreprise et Sécurisation TLS",
                category: "windows",
                desc: "Mise en place d'une PKI et sécurisation TLS",
                cover: "FIles/Images/Docu/certif.jpg",
                stack: ["Windows", "AD", "PKI", "TLS"],
                meta: "Documentation technique • 2026",
                bullets: [
                    "Mise en place d'une autorité de certification (CA) interne.",
                    "Configuration des certificats numériques.",
                    "Ajout des certificat pour sur les serveurs"
                ],
                links: [
                    {
                        label: "Voir la documentation",
                        icon: "fa-solid fa-file-pdf",
                        href: "FIles/Documents/certificat.pdf"
                    }
                ]
            },
            {
                title: "Sécurisation du serveur SSH",
                category: "linux",
                desc: "Mise en place du service SSH sur un serveur",
                cover: "FIles/Images/Docu/sudo.avif",
                stack: ["Linux", "Debian", "SSH", "Security"],
                meta: "Documentation technique • 2026",
                bullets: [
                    "Configuration du fichier sshd_config (Port, Root login, PubKey).",
                    "Mise en place de Fail2Ban pour prévenir les brute-force.",
                    "Gestion des utilisateurs et des groupes sudo."
                ],
                links: [
                    {
                        label: "Voir la documentation",
                        icon: "fa-solid fa-file-pdf",
                        href: "FIles/Documents/ssh.pdf"
                    }
                ]
            },
            {
                title: "Installation et configuration de Docker",
                category: "linux",
                desc: "Mise en place du service Docker sur un serveur Linux",
                cover: "FIles/Images/Docu/855.jpg",
                stack: ["Linux", "Debian", "Docker", "Containerisation"],
                meta: "Documentation technique • 2026",
                bullets: [
                    "Installation de Docker sur un serveur Debian.",
                    "Configuration du daemon Docker.",
                    "Création et gestion de conteneurs."
                ],
                links: [
                    {
                        label: "Voir la documentation",
                        icon: "fa-solid fa-file-pdf",
                        href: "FIles/Documents/docker.pdf"
                    }
                ]
            },
            {
                title: "Mise en place d'un serveur web Nginx",
                category: "linux",
                desc: "Mise en place du service Nginx sur un serveur Linux",
                cover: "FIles/Images/Docu/Nginx_logo.svg.png",
                stack: ["Linux", "Debian", "Nginx", "Web Server"],
                meta: "Documentation technique • 2026",
                bullets: [
                    "Configuration du fichier nginx.conf.",
                    "Mise en place de sites web virtuels.",
                    "Création d'un bloc serveur (Server Block)"
                ],
                links: [
                    {
                        label: "Voir la documentation",
                        icon: "fa-solid fa-file-pdf",
                        href: "FIles/Documents/Nginx.pdf"
                    }
                ]
            },
            {
                title: "Création et configuration d'un serveur SFTP",
                category: "linux",
                desc: "Mise en place du service SFTP sur un serveur Linux",
                cover: "FIles/Images/Docu/sftp.png",
                stack: ["Linux", "Debian", "SFTP", "Security"],
                meta: "Documentation technique • 2026",
                bullets: [
                    "Installation du serveur OpenSSH.",
                    "Configuration du service SFTP.",
                    "Création d'utilisateurs et de groupes."
                ],
                links: [
                    {
                        label: "Voir la documentation",
                        icon: "fa-solid fa-file-pdf",
                        href: "FIles/Documents/sftp.pdf"
                    }
                ]
            },
            {
                title: "Installation de Proxmox VE",
                category: "linux",
                desc: "Installation et configuration de Proxmox VE sur un serveur physique.",
                cover: "FIles/Images/Docu/proxmox.png",
                stack: ["Linux", "Proxmox", "Virtualization"],
                meta: "Documentation technique • 2025",
                bullets: [
                    "Installation de Proxmox VE sur un serveur physique.",
                    "Configuration du réseau et des disques.",
                    "Création de machines virtuelles et conteneurs."
                ],
                links: [
                    {
                        label: "Voir la documentation",
                        icon: "fa-solid fa-file-pdf",
                        href: "FIles/Documents/proxmox.pdf"
                    }
                ]
            },
            {
                title: "Rapport de stage Tertio Engineering 2026",
                category: "rapport",
                desc: "Rapport de stage effectué au sein de l'entreprise Tertio Engineering.",
                cover: "FIles/Stage/Logo-Tertio-Final_MidSize.png",
                stack: ["Stage", "Admin", "Documentation"],
                meta: "Rapport de stage • 2026",
                bullets: [
                    "Mon rôle en tant que Technicien Systèmes et Réseaux",
                    "Supervision d'un parc informatique",
                    "Migration d'un Active Directory obsolète vers une nouvelle infrastructure Windows Server 2022",
                    "Étude de cas sur l'alternative aux GAFAM",
                ],
                links: [
                    {
                        label: "Voir le rapport de stage",
                        icon: "fa-solid fa-file-pdf",
                        href: "https://drive.proton.me/urls/JFPGEM0WP0#GUPqBA3BVVh7"
                    },
                    {
                        label: "Voir le cas d'étude sur l'alternative aux GAFAM",
                        icon: "fa-solid fa-file-pdf",
                        href: "https://drive.proton.me/urls/6CK9B1QDFM#FXYjFcnOtS82"
                    },
                    {
                        label: "Fichier du stage",
                        icon: "fa-solid fa-folder-open",
                        href: "FIles/Stage/2026/stage2026.html"
                    }
                ]
            },
            {
                title: "Installation de Windows Server 2022 sur Proxmox VE",
                category: "windows",
                desc: "Installation et configuration d'une machine virtuelle Windows Server 2022 sur Proxmox VE.",
                cover: "FIles/Images/Docu/windows-server.jpeg",
                stack: ["Windows Server", "Proxmox", "Virtualization"],
                meta: "Documentation technique • 2025",
                bullets: [
                    "Installation de Windows Server 2022 sur Proxmox VE.",
                    "Configuration du réseau et des disques.",
                    "Installation des mises à jour et drivers pour la virtualisation."
                ],
                links: [
                    {
                        label: "Voir la documentation",
                        icon: "fa-solid fa-file-pdf",
                        href: "FIles/Documents/win-2022.pdf"
                    }
                ]
            },
            {
                title: "Installation de Windows 11 sur Proxmox VE",
                category: "windows",
                desc: "Installation et configuration d'une machine virtuelle Windows 11 sur Proxmox VE.",
                cover: "FIles/Images/Docu/windows-11-1500x430.jpg",
                stack: ["Windows 11", "Proxmox", "Virtualization"],
                meta: "Documentation technique • 2025",
                bullets: [
                    "Installation de Windows 11 sur Proxmox VE.",
                    "Configuration du réseau et des disques.",
                    "Installation des mises à jour et drivers pour la virtualisation."
                ],
                links: [
                    {
                        label: "Voir la documentation",
                        icon: "fa-solid fa-file-pdf",
                        href: "FIles/Documents/win-11.pdf"
                    }
                ]
            },
            {
                title: "Rapport de stage Tertio Engineering 2025",
                category: "rapport",
                desc: "Rapport de stage effectué au sein de l'entreprise Tertio Engineering.",
                cover: "FIles/Stage/Logo-Tertio-Final_MidSize.png",
                stack: ["Stage", "Support", "Documentation"],
                meta: "Rapport de stage • 2025",
                bullets: [
                    "Mon rôle en tant que Technicien Support Informatique",
                    "Gestion de parc informatique : supervision du matériel réseau (switchs, routeurs, points d’accès), inventaire et suivi des équipements",
                    "Support technique : diagnostic et résolution des incidents réseau (connexion, accès serveurs, imprimantes), assistance aux utilisateurs.",
                ],
                links: [
                    {
                        label: "Voir le rapport de stage",
                        icon: "fa-solid fa-file-pdf",
                        href: "https://drive.proton.me/urls/QZ86AB8VAG#KRMBGHXFUGuP"
                    },
                    {
                        label: "Fichier du stage",
                        icon: "fa-solid fa-folder-open",
                        href: "FIles/Stage/2025/stage2025.html"
                    }
                ]
            },
            {
                title: "Installation et configuration de Zabbix",
                category: "linux",
                desc: "Installation et configuration du logiciel Zabbix pour la surveillance de serveurs.",
                cover: "FIles/Images/Docu/Zabbix_logo.png",
                stack: ["Linux", "Zabbix", "Monitoring"],
                meta: "Documentation technique • 2024",
                bullets: [
                    "Installation du serveur Zabbix.",
                    "Configuration de la base de données MariaDB.",
                    "Configuration du service Zabbix Server."
                ],
                links: [
                    {
                        label: "Voir la documentation",
                        icon: "fa-solid fa-file-pdf",
                        href: "FIles/Documents/zabbix.pdf"
                    }
                ]
            },
            {
                title: "Installation et configuration de GLPI",
                category: "linux",
                desc: "Installation et configuration du logiciel GLPI pour la gestion de parc informatique.",
                cover: "FIles/Images/Docu/GLPI.webp",
                stack: ["Linux", "GLPI", "Inventory"],
                meta: "Documentation technique • 2024",
                bullets: [
                    "Installation du serveur GLPI.",
                    "Configuration de la base de données MariaDB.",
                    "Configuration du service GLPI."
                ],
                links: [
                    {
                        label: "Voir la documentation",
                        icon: "fa-solid fa-file-pdf",
                        href: "FIles/Documents/glpi.pdf"
                    }
                ]
            }
        ],
/*----------------- Certification  -----------------*/
        certifications: [
            {
                title: "SC-900 - Microsoft Security, Compliance, and Identity Fundamentals",
                category: "network",
                desc: "Microsoft • 2026",
                cover: "FIles/Images/Docu/images.png",
                stack: ["Azure", "Security", "Compliance"],
                meta: "Fondamentaux de la sécurité, conformité et identité Microsoft.",
                bullets: [
                    "Concepts de sécurité, conformité et identité dans le cloud.",
                    "Services Microsoft liés à la sécurité et à la conformité.",
                    "Gestion des identités et des accès avec Azure AD."
                ],
                links: [
                    {
                        label: "Voir la certification",
                        icon: "fa-solid fa-certificate",
                        href: ""
                    }
                ]
            },
            {
                title: "SecNumAcadémie",
                category: "security",
                desc: "ANSSI • 2026",
                cover: "FIles/Images/Docu/logo_anssi.png",
                stack: ["Cybersécurité", "ANSSI", "MOOC"],
                meta: "Sensibilisation à la sécurité des systèmes d'information.",
                bullets: [
                    "Authentification, mots de passe et chiffrement.",
                    "Sécurité des postes de travail et nomadisme.",
                    "Gestion des incidents et bonnes pratiques."
                ],
                links: [
                    {
                        label: "Voir la certification",
                        icon: "fa-solid fa-certificate",
                        href: "FIles/Certifs/anssi.pdf"
                    }
                ]
            },
            {
                title: "Learn Python 3 Course",
                category: "dev",
                desc: "Codecademy • 2024",
                cover: "FIles/Images/Docu/python.png",
                stack: ["Python", "Développement", "Boucle"],
                meta: "Introduction aux concepts de base du langage Python.",
                bullets: [
                    "Variables, types de données et structures de contrôle.",
                    "Fonctions et modules Python.",
                    "Gestion des fichiers et des exceptions."
                ],
                links: [
                    {
                        label: "Voir la certification",
                        icon: "fa-solid fa-certificate",
                        href: "FIles/Certifs/python.pdf"
                    }
                ]
            },
            {
                title: "Learn SQL Course",
                category: "dev",
                desc: "Codecademy • 2024",
                cover: "FIles/Images/Docu/SQL-Products-Option-Light_v1_RE4xfAg.avif",
                stack: ["SQL", "Base de données", "MariaDB"],
                meta: "Introduction aux concepts de base du langage SQL.",
                bullets: [
                    "Création et gestion de bases de données relationnelles.",
                    "Requêtes SQL de base (SELECT, INSERT, UPDATE, DELETE).",
                    "Utilisation des contraintes et des clés étrangères."
                ],
                links: [
                    {
                        label: "Voir la certification",
                        icon: "fa-solid fa-certificate",
                        href: "FIles/Certifs/sql.pdf"
                    }
                ]
            },
            {
                title: "Learn HTML Course",
                category: "dev",
                desc: "Codecademy • 2024",
                cover: "FIles/Images/Docu/code2.avif",
                stack: ["HTML", "Web", "Développement"],
                meta: "Introduction aux concepts de base du langage HTML.",
                bullets: [
                    "Structure de base d'un document HTML.",
                    "Utilisation des balises pour structurer le contenu.",
                    "Création de liens et d'images dans un document HTML."
                ],
                links: [
                    {
                        label: "Voir la certification",
                        icon: "fa-solid fa-certificate",
                        href: "FIles/Certifs/html.pdf"
                    }
                ]
            },
            {
                title: "Learn the Command Line Course",
                category: "dev",
                desc: "Codecademy • 2024",
                cover: "FIles/Images/Docu/sudo.avif",
                stack: ["Command Line", "Linux", "Bash"],
                meta: "Introduction aux commandes de base du terminal Linux.",
                bullets: [
                    "Compréhension des commandes de base du terminal Linux.",
                    "Utilisation des outils de navigation et d'exploration de fichiers.",
                    "Gestion des permissions et des utilisateurs dans un environnement Linux."
                ],
                links: [
                    {
                        label: "Voir la certification",
                        icon: "fa-solid fa-certificate",
                        href: "FIles/Certifs/command.pdf"
                    }
                ]
            },
            {
                title: "Introduction to Ethical Hacking Course",
                category: "security",
                desc: "Codecademy • 2024",
                cover: "FIles/Images/Docu/ethichack.jpg",
                stack: ["Cybersécurité", "Hacking", "Réseau"],
                meta: "Introduction aux techniques d'ethical hacking et à la sécurité informatique.",
                bullets: [
                    "Compréhension des techniques d'ethical hacking.",
                    "Identification des vulnérabilités dans les systèmes informatiques.",
                    "Application de méthodes de protection et de défense contre les attaques."
                ],
                links: [
                    {
                        label: "Voir la certification",
                        icon: "fa-solid fa-certificate",
                        href: "FIles/Certifs/ethichack.pdf"
                    }
                ]
            },
            {
                title: "Introduction to Cybersecurity Course",
                category: "security",
                desc: "Codecademy • 2024",
                cover: "FIles/Images/Docu/cybersecu.jpg",
                stack: ["Cybersécurité", "Réseaux", "Systèmes"],
                meta: "Introduction aux concepts fondamentaux de la cybersécurité, y compris les menaces, les vulnérabilités et les meilleures pratiques pour protéger les systèmes d'information.",
                bullets: [
                    "Compréhension des concepts de base de la cybersécurité.",
                    " Identification des différentes menaces et vulnérabilités.",
                    "Application des bonnes pratiques de sécurité pour protéger les systèmes d'information."
                ],
                links: [
                    {
                        label: "Voir la certification",
                        icon: "fa-solid fa-certificate",
                        href: "FIles/Certifs/cyber.pdf"
                    }
                ]
            },
            {
                title: "Intro to Cloud Computing Course",
                category: "network",
                desc: "Codecademy • 2024",
                cover: "FIles/Images/Docu/cloud.webp",
                stack: ["Cloud", "Infrastructure", "Security"],
                meta: "Introduction aux concepts de base du cloud computing.",
                bullets: [
                    "Compréhension des concepts de base du cloud computing.",
                    "Identification des différents modèles de services cloud (IaaS, PaaS, SaaS).",
                    "Analyse des avantages et des risques liés à l'utilisation du cloud."
                ],
                links: [
                    {
                        label: "Voir la certification",
                        icon: "fa-solid fa-certificate",
                        href: "FIles/Certifs/cloud.pdf"
                    }
                ]
            }
        ],
/*----------------- Veille  -----------------*/
        veille: [
            {
                title: "L'Architecture et la Cybersécurité du Grand Paris Express",
                desc: "Analyse des vulnérabilités et protection des infrastructures critiques de transport.",
                cover: "FIles/Images/Veilles/fr-5eef62a4-ffd5-408f-a968-70d7d0d4e33f.webp",
                stack: ["Cybersécurité", "IoT", "Transport", "Réseau"],
                meta: "Sujet de veille • 2024 - 2026",
                bullets: [
                    "Étude des protocoles de communication embarqués et de leurs failles potentielles.",
                    "Analyse des risques liés aux réseaux Wi-Fi publics.",
                    "Impact des cyberattaques sur la sûreté des passagers et la continuité de service.",
                    "Solutions de segmentation et de surveillance des flux réseau."
                ],
                links: [
                    {
                        label: "Synthèse PDF",
                        icon: "fa-solid fa-file-pdf",
                        href: "https://drive.proton.me/urls/JPTHHSYTCR#ZXs16D8ff7NN"
                    },
                    {
                        label: "Documentation",
                        icon: "fa-solid fa-folder-open",
                        href: "FIles/Veille/veille.html"
                    }
                ]
            }
        ],
    },
};
/* ---------------- UI helpers ---------------- */
function toast(title, msg) {
    const wrap = $("#toasts");
    const el = document.createElement("div");
    el.className = "toast";
    el.innerHTML = `
    <i class="fa-solid fa-sparkles"></i>
    <div>
      <div class="toastTitle">${escapeHTML(title)}</div>
      <div class="toastMsg">${escapeHTML(msg)}</div>
    </div>
  `;
    wrap.appendChild(el);
    setTimeout(() => {
        el.style.opacity = "0";
        el.style.transform = "translateY(8px)";
    }, 2400);
    setTimeout(() => {
        el.remove();
    }, 2850);
}
function escapeHTML(s) {
    return String(s).replace(
        /[&<>"']/g,
        (m) =>
            ({
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#039;",
            }[m])
    );
}

async function copyText(text) {
    try {
        await navigator.clipboard.writeText(text);
        return true;
    } catch {
        // fallback
        const t = document.createElement("textarea");
        t.value = text;
        document.body.appendChild(t);
        t.select();
        const ok = document.execCommand("copy");
        t.remove();
        return ok;
    }
}

/* ---------------- Build sections ---------------- */
function renderSnippet() {
    const snippetSISR = $("#codeSnippetSISR");
    const snippetSLAM = $("#codeSnippetSLAM");
    const snippetCyber = $("#codeSnippetCyber");
    
    if (snippetSISR) snippetSISR.textContent = App.data.snippetSISR;
    if (snippetSLAM) snippetSLAM.textContent = App.data.snippetSLAM;
    if (snippetCyber) snippetCyber.textContent = App.data.snippetCyber;
    
    // Rétrocompatibilité avec l'ancien conteneur unique
    const snippetFull = $("#codeSnippet");
    if (snippetFull) snippetFull.textContent = App.data.snippetSISR + "\n\n" + App.data.snippetSLAM + "\n\n" + App.data.snippetCyber;
}
function renderSkills(filter = null) {
    if (filter) {
        App.state.skillFilter = filter;
        App.state.skillPage = 0;
    }
    const currentFilter = App.state.skillFilter;
    const currentPage = App.state.skillPage;
    const limit = 9;

    const grid = $("#skillsGrid");
    const allSkills = App.data.skills.filter((s) =>
        currentFilter === "all" ? true : s.group === currentFilter
    );
    const totalPages = Math.ceil(allSkills.length / limit);
    const list = allSkills.slice(currentPage * limit, (currentPage + 1) * limit);

    grid.innerHTML = list
        .map(
            (s) => `
    <div class="skillCard" data-group="${s.group}">
      <div class="skillTop">
        <div class="skillName"><i class="${s.icon}"></i>${escapeHTML(
                s.name
            )}</div>
        <div class="skillPct">${s.pct}%</div>
      </div>
      <div class="bar"><div class="fill" style="--w:${s.pct}"></div></div>
      <div class="skillTags">
        ${s.tags
            .map((t) => `<span class="badge">${escapeHTML(t)}</span>`)
            .join("")}
      </div>
    </div>
  `
        )
        .join("");

    // Pagination controls
    const pager = $("#skillsPagination");
    if (pager) {
        if (totalPages > 1) {
            pager.innerHTML = `
                <button class="iconBtn" id="prevSkill" ${currentPage === 0 ? "disabled" : ""}><i class="fa-solid fa-chevron-left"></i></button>
                <span style="font-family:ui-monospace; font-size:0.9rem; color:var(--text-muted);">${currentPage + 1} / ${totalPages}</span>
                <button class="iconBtn" id="nextSkill" ${currentPage >= totalPages - 1 ? "disabled" : ""}><i class="fa-solid fa-chevron-right"></i></button>
            `;
            $("#prevSkill").onclick = () => {
                App.state.skillPage--;
                renderSkills();
            };
            $("#nextSkill").onclick = () => {
                App.state.skillPage++;
                renderSkills();
            };
        } else {
            pager.innerHTML = "";
        }
    }

    // animate fills once in view
    const cards = $$(".skillCard", grid);
    const obs = new IntersectionObserver(
        (entries) => {
            entries.forEach((e) => {
                if (!e.isIntersecting) return;
                const fill = $(".fill", e.target);
                const pct = $(".skillPct", e.target);
                const w = e.target
                    .querySelector(".skillPct")
                    .textContent.replace("%", "");
                // trigger width
                requestAnimationFrame(() => {
                    fill.style.width = w + "%";
                });
                // little counter feel
                let cur = 0,
                    target = Number(w);
                const tick = () => {
                    cur += Math.max(1, Math.ceil((target - cur) / 10));
                    if (cur >= target) cur = target;
                    pct.textContent = cur + "%";
                    if (cur < target) requestAnimationFrame(tick);
                };
                requestAnimationFrame(tick);
                obs.unobserve(e.target);
            });
        },
        { threshold: 0.4 }
    );
    cards.forEach((c) => obs.observe(c));
}

function renderTimeline() {
    const root = $("#timeline");
    root.innerHTML = App.data.timeline
        .map(
            (t, idx) => `
    <div class="tItem" data-idx="${idx}">
      <div class="tHead" role="button" tabindex="0" aria-expanded="false">
        <div class="tLeft">
          <div class="tIcon"><i class="${t.icon}"></i></div>
          <div>
            <div class="tTitle">${escapeHTML(t.role)}</div>
            <div class="tMeta">${escapeHTML(t.org)} • ${escapeHTML(
                t.period
            )}</div>
          </div>
        </div>
        <div class="tArrow"><i class="fa-solid fa-chevron-down"></i></div>
      </div>
      <div class="tBody" aria-hidden="true">
        <div class="tInner">
          <ul class="bullets">
            ${t.bullets.map((b) => `<li>${b}</li>`).join("")}
          </ul>
        </div>
      </div>
    </div>
  `
        )
        .join("");

    const items = $$(".tItem", root);
    items.forEach((item) => {
        const head = $(".tHead", item);
        const body = $(".tBody", item);

        const toggle = () => {
            const open = item.classList.toggle("open");
            head.setAttribute("aria-expanded", open ? "true" : "false");
            body.setAttribute("aria-hidden", open ? "false" : "true");
            body.style.maxHeight = open ? body.scrollHeight + "px" : "0px";
        };

        head.addEventListener("click", toggle);
        head.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                toggle();
            }
        });
    });
}

function renderProjects(filter = null) {
    if (filter) {
        App.state.projectFilter = filter;
        App.state.projectPage = 0;
    }
    const currentFilter = App.state.projectFilter;
    const currentPage = App.state.projectPage;
    const limit = 6;
    const root = $("#projectsGrid");
    
    // Filtrer les projets
    const list = App.data.projects
        .filter((p) => (currentFilter === "all" ? true : p.category === currentFilter));
    
    const totalPages = Math.ceil(list.length / limit);
    const visibleList = list.slice(currentPage * limit, (currentPage + 1) * limit);

    root.innerHTML = visibleList
        .map(
            (p) => {
                // Retrouver l'index original pour la modale
                const originalIdx = App.data.projects.indexOf(p);
                return `
    <div class="pCard" data-idx="${originalIdx}" role="button" tabindex="0" aria-label="Open project ${escapeHTML(
                p.title
            )}">
      <div class="pCover" style="background-image:url('${p.cover}')">
        <div class="pOverlay">
          <div class="pStack">
            ${p.stack
                .slice(0, 3)
                .map((s) => `<span class="stackChip">${escapeHTML(s)}</span>`)
                .join("")}
          </div>
          <div class="stackChip"><i class="fa-solid fa-up-right-from-square"></i></div>
        </div>
      </div>
      <div class="pBody">
        <div class="pTitle">${escapeHTML(p.title)}</div>
        <div class="pDesc">${escapeHTML(p.desc)}</div>
        <div class="pFoot">
          <span><i class="fa-solid fa-sparkles"></i></span>
          <span>${p.stack.join(" • ")}</span>
        </div>
      </div>
    </div>
  `;
            }
        )
        .join("");

    // Pagination controls
    const pager = $("#projectsPagination");
    if (pager) {
        if (totalPages > 1) {
            pager.innerHTML = `
                <button class="iconBtn" id="prevProj" ${currentPage === 0 ? "disabled" : ""}><i class="fa-solid fa-chevron-left"></i></button>
                <span style="font-family:ui-monospace; font-size:0.9rem; color:var(--text-muted);">${currentPage + 1} / ${totalPages}</span>
                <button class="iconBtn" id="nextProj" ${currentPage >= totalPages - 1 ? "disabled" : ""}><i class="fa-solid fa-chevron-right"></i></button>
            `;
            $("#prevProj").onclick = () => {
                App.state.projectPage--;
                renderProjects();
            };
            $("#nextProj").onclick = () => {
                App.state.projectPage++;
                renderProjects();
            };
        } else {
            pager.innerHTML = "";
        }
    }

    $$(".pCard", root).forEach((card) => {
        const open = () => openProjectModal(Number(card.dataset.idx));
        card.addEventListener("click", open);
        card.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                open();
            }
        });
    });
}

function renderDocumentation(filter = null) {
    if (filter) {
        App.state.docFilter = filter;
        App.state.docPage = 0;
    }
    const currentFilter = App.state.docFilter;
    const currentPage = App.state.docPage;
    const limit = 6;
    const root = $("#documentationGrid");
    if (!root) return;
    
    const list = App.data.documentation
        .filter((p) => (currentFilter === "all" ? true : p.category === currentFilter));

    const totalPages = Math.ceil(list.length / limit);
    const visibleList = list.slice(currentPage * limit, (currentPage + 1) * limit);

    root.innerHTML = visibleList
        .map(
            (p) => {
                const idx = App.data.documentation.indexOf(p);
                return `
    <div class="pCard" data-doc-idx="${idx}" role="button" tabindex="0" aria-label="Open doc ${escapeHTML(
                p.title
            )}">
      <div class="pCover" style="background-image:url('${p.cover}')">
        <div class="pOverlay">
          <div class="pStack">
            ${p.stack
                .slice(0, 3)
                .map((s) => `<span class="stackChip">${escapeHTML(s)}</span>`)
                .join("")}
          </div>
          <div class="stackChip"><i class="fa-solid fa-up-right-from-square"></i></div>
        </div>
      </div>
      <div class="pBody">
        <div class="pTitle">${escapeHTML(p.title)}</div>
        <div class="pDesc">${escapeHTML(p.desc)}</div>
        <div class="pFoot">
          <span><i class="fa-solid fa-book"></i> doc</span>
          <span>${p.stack.join(" • ")}</span>
        </div>
      </div>
    </div>
  `;
            }
        )
        .join("");

    // Pagination controls
    const pager = $("#documentationPagination");
    if (pager) {
        if (totalPages > 1) {
            pager.innerHTML = `
                <button class="iconBtn" id="prevDoc" ${currentPage === 0 ? "disabled" : ""}><i class="fa-solid fa-chevron-left"></i></button>
                <span style="font-family:ui-monospace; font-size:0.9rem; color:var(--text-muted);">${currentPage + 1} / ${totalPages}</span>
                <button class="iconBtn" id="nextDoc" ${currentPage >= totalPages - 1 ? "disabled" : ""}><i class="fa-solid fa-chevron-right"></i></button>
            `;
            $("#prevDoc").onclick = () => {
                App.state.docPage--;
                renderDocumentation();
            };
            $("#nextDoc").onclick = () => {
                App.state.docPage++;
                renderDocumentation();
            };
        } else {
            pager.innerHTML = "";
        }
    }

    $$(".pCard[data-doc-idx]", root).forEach((card) => {
        const open = () => openDocModal(Number(card.dataset.docIdx));
        card.addEventListener("click", open);
        card.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                open();
            }
        });
    });
}

function renderCertifications(filter = null) {
    if (filter) {
        App.state.certFilter = filter;
        App.state.certPage = 0;
    }
    const currentFilter = App.state.certFilter;
    const currentPage = App.state.certPage;
    const limit = 6;
    const root = $("#certificationsGrid");
    if (!root) return;

    const list = App.data.certifications
        .filter((c) => (currentFilter === "all" ? true : c.category === currentFilter));

    const totalPages = Math.ceil(list.length / limit);
    const visibleList = list.slice(currentPage * limit, (currentPage + 1) * limit);

    root.innerHTML = visibleList
        .map(
            (p) => {
                const idx = App.data.certifications.indexOf(p);
                return `
    <div class="pCard" data-cert-idx="${idx}" role="button" tabindex="0" aria-label="Open certification ${escapeHTML(
                p.title
            )}">
      <div class="pCover" style="background-image:url('${p.cover}')">
        <div class="pOverlay">
          <div class="pStack">
            ${p.stack
                .slice(0, 3)
                .map((s) => `<span class="stackChip">${escapeHTML(s)}</span>`)
                .join("")}
          </div>
          <div class="stackChip"><i class="fa-solid fa-up-right-from-square"></i></div>
        </div>
      </div>
      <div class="pBody">
        <div class="pTitle">${escapeHTML(p.title)}</div>
        <div class="pDesc">${escapeHTML(p.desc)}</div>
        <div class="pFoot">
          <span><i class="fa-solid fa-certificate"></i></span>
          <span>${p.stack.join(" • ")}</span>
        </div>
      </div>
    </div>
  `;
            }
        )
        .join("");

    // Pagination controls
    const pager = $("#certificationsPagination");
    if (pager) {
        if (totalPages > 1) {
            pager.innerHTML = `
                <button class="iconBtn" id="prevCert" ${currentPage === 0 ? "disabled" : ""}><i class="fa-solid fa-chevron-left"></i></button>
                <span style="font-family:ui-monospace; font-size:0.9rem; color:var(--text-muted);">${currentPage + 1} / ${totalPages}</span>
                <button class="iconBtn" id="nextCert" ${currentPage >= totalPages - 1 ? "disabled" : ""}><i class="fa-solid fa-chevron-right"></i></button>
            `;
            $("#prevCert").onclick = () => {
                App.state.certPage--;
                renderCertifications();
            };
            $("#nextCert").onclick = () => {
                App.state.certPage++;
                renderCertifications();
            };
        } else {
            pager.innerHTML = "";
        }
    }

    $$(".pCard[data-cert-idx]", root).forEach((card) => {
        const open = () => openCertModal(Number(card.dataset.certIdx));
        card.addEventListener("click", open);
        card.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                open();
            }
        });
    });
}

function renderVeille() {
    const root = $("#veilleGrid");
    if (!root) return;
    root.innerHTML = App.data.veille
        .map(
            (p, idx) => `
    <div class="pCard" data-veille-idx="${idx}" role="button" tabindex="0" aria-label="Open veille ${escapeHTML(
                p.title
            )}">
      <div class="pCover" style="background-image:url('${p.cover}')">
        <div class="pOverlay">
          <div class="pStack">
            ${p.stack
                .slice(0, 3)
                .map((s) => `<span class="stackChip">${escapeHTML(s)}</span>`)
                .join("")}
          </div>
          <div class="stackChip"><i class="fa-solid fa-up-right-from-square"></i></div>
        </div>
      </div>
      <div class="pBody">
        <div class="pTitle">${escapeHTML(p.title)}</div>
        <div class="pDesc">${escapeHTML(p.desc)}</div>
        <div class="pFoot">
          <span><i class="fa-solid fa-binoculars"></i> veille</span>
          <span>${p.stack.join(" • ")}</span>
        </div>
      </div>
    </div>
  `
        )
        .join("");

    $$(".pCard[data-veille-idx]", root).forEach((card) => {
        const open = () => openVeilleModal(Number(card.dataset.veilleIdx));
        card.addEventListener("click", open);
        card.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                open();
            }
        });
    });
}

/* ---------------- Modal ---------------- */
function openProjectModal(idx) {
    const p = App.data.projects[idx];
    if (!p) return;

    $("#modalTitle").textContent = p.title;
    $("#modalCover").style.backgroundImage = `url('${p.cover}')`;
    $("#modalMeta").textContent = p.meta;
    $("#modalDesc").textContent = p.desc;

    $("#modalBullets").innerHTML = `
    <ul class="bullets">
      ${p.bullets.map((b) => `<li>${escapeHTML(b)}</li>`).join("")}
    </ul>
  `;

    if (Array.isArray(p.links)) {
        $("#modalLinks").innerHTML = p.links
            .map(
                (l) => `
        <a class="btn secondary magnetic" href="${
            l.href
        }" target="_blank" rel="noopener">
          <i class="${l.icon}"></i><span>${escapeHTML(l.label)}</span>
        </a>
      `
            )
            .join("");
    } else {
        $("#modalLinks").innerHTML = Object.entries(p.links)
            .map(
                ([title, links]) => `
        <div style="width:100%; margin-bottom:1rem;">
            <h4 style="margin-bottom:0.5rem; color:var(--text-main); font-size:1rem;">${escapeHTML(title)}</h4>
            <div style="display:flex; gap:0.5rem; flex-wrap:wrap;">
                ${links.map(l => `
                    <a class="btn secondary magnetic" href="${l.href}" target="_blank" rel="noopener">
                        <i class="${l.icon}"></i><span>${escapeHTML(l.label)}</span>
                    </a>
                `).join("")}
            </div>
        </div>`
            )
            .join("");
    }

    $("#modalWrap").classList.add("open");
    $("#modalWrap").setAttribute("aria-hidden", "false");
    App.state.modal = true;
    toast("Ouvert", "Détails sur le projet");
}

function openDocModal(idx) {
    const p = App.data.documentation[idx];
    if (!p) return;

    $("#modalTitle").textContent = p.title;
    $("#modalCover").style.backgroundImage = `url('${p.cover}')`;
    $("#modalMeta").textContent = p.meta;
    $("#modalDesc").textContent = p.desc;

    $("#modalBullets").innerHTML = `
    <ul class="bullets">
      ${p.bullets.map((b) => `<li>${escapeHTML(b)}</li>`).join("")}
    </ul>
  `;

    $("#modalLinks").innerHTML = p.links
        .map(
            (l) => `
    <a class="btn secondary magnetic" href="${
        l.href
    }" target="_blank" rel="noopener">
      <i class="${l.icon}"></i><span>${escapeHTML(l.label)}</span>
    </a>
  `
        )
        .join("");

    $("#modalWrap").classList.add("open");
    $("#modalWrap").setAttribute("aria-hidden", "false");
    App.state.modal = true;
    toast("Ouvert", "Détails sur la documentation");
}

function openCertModal(idx) {
    const p = App.data.certifications[idx];
    if (!p) return;

    $("#modalTitle").textContent = p.title;
    $("#modalCover").style.backgroundImage = `url('${p.cover}')`;
    $("#modalMeta").textContent = p.meta;
    $("#modalDesc").textContent = p.desc;

    $("#modalBullets").innerHTML = `
    <ul class="bullets">
      ${p.bullets.map((b) => `<li>${escapeHTML(b)}</li>`).join("")}
    </ul>
  `;

    $("#modalLinks").innerHTML = p.links
        .map(
            (l) => `
    <a class="btn secondary magnetic" href="${
        l.href
    }" target="_blank" rel="noopener">
      <i class="${l.icon}"></i><span>${escapeHTML(l.label)}</span>
    </a>
  `
        )
        .join("");

    $("#modalWrap").classList.add("open");
    $("#modalWrap").setAttribute("aria-hidden", "false");
    App.state.modal = true;
    toast("Ouvert", "Détails sur la certification");
}

function openVeilleModal(idx) {
    const p = App.data.veille[idx];
    if (!p) return;

    $("#modalTitle").textContent = p.title;
    $("#modalCover").style.backgroundImage = `url('${p.cover}')`;
    $("#modalMeta").textContent = p.meta;
    $("#modalDesc").textContent = p.desc;

    $("#modalBullets").innerHTML = `
    <ul class="bullets">
      ${p.bullets.map((b) => `<li>${escapeHTML(b)}</li>`).join("")}
    </ul>
  `;

    $("#modalLinks").innerHTML = p.links
        .map(
            (l) => `
    <a class="btn secondary magnetic" href="${
        l.href
    }" target="_blank" rel="noopener">
      <i class="${l.icon}"></i><span>${escapeHTML(l.label)}</span>
    </a>
  `
        )
        .join("");

    $("#modalWrap").classList.add("open");
    $("#modalWrap").setAttribute("aria-hidden", "false");
    App.state.modal = true;
    toast("Ouvert", "Détails sur la veille");
}

function closeModal() {
    $("#modalWrap").classList.remove("open");
    $("#modalWrap").setAttribute("aria-hidden", "true");
    App.state.modal = false;
}
$("#closeModal").addEventListener("click", closeModal);
$("#modalWrap").addEventListener("click", (e) => {
    if (e.target.id === "modalWrap") closeModal();
});
window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && App.state.modal) closeModal();
});

/* ---------------- Drawer ---------------- */
function setDrawer(open) {
    App.state.drawer = open;
    const d = $("#drawer");
    d.classList.toggle("open", open);
    d.setAttribute("aria-hidden", open ? "false" : "true");
    $("#menuBtn").setAttribute("aria-expanded", open ? "true" : "false");
}
$("#menuBtn").addEventListener("click", () => setDrawer(!App.state.drawer));
$("#closeDrawer").addEventListener("click", () => setDrawer(false));
$$(".drawerLink").forEach((a) =>
    a.addEventListener("click", () => setDrawer(false))
);
document.addEventListener("click", (e) => {
    if (!App.state.drawer) return;
    const d = $("#drawer");
    const btn = $("#menuBtn");
    if (!d.contains(e.target) && !btn.contains(e.target)) setDrawer(false);
});

/* ---------------- Scroll spy ---------------- */
function initScrollSpy() {
    const links = $$(".navLink");
    const sections = $$("section[id]");

    const obs = new IntersectionObserver(
        (entries) => {
            entries.forEach((ent) => {
                if (!ent.isIntersecting) return;
                const id = ent.target.id;
                App.state.active = id;
                links.forEach((l) => {
                    l.classList.toggle("active", l.dataset.section === id);
                });
            });
        },
        { threshold: 0.35 }
    );

    sections.forEach((s) => obs.observe(s));

    // smooth click
    links.forEach((l) => {
        l.addEventListener("click", (e) => {
            e.preventDefault();
            const id = l.getAttribute("href");
            const target = $(id);
            if (!target) return;
            const topbarH = $("#topbar").offsetHeight;
            const y =
                target.getBoundingClientRect().top +
                window.scrollY -
                topbarH -
                10;
            window.scrollTo({ top: y, behavior: "smooth" });
        });
    });
}

/* ---------------- Counters (hero stats) ---------------- */
function animateStats() {
    const nums = $$(".statNum");
    const obs = new IntersectionObserver(
        (entries) => {
            entries.forEach((ent) => {
                if (!ent.isIntersecting) return;
                const el = ent.target;
                const target = Number(el.dataset.count || 0);
                let cur = 0;
                const tick = () => {
                    cur += Math.max(1, Math.ceil((target - cur) / 12));
                    if (cur >= target) cur = target;
                    el.textContent = cur;
                    if (cur < target) requestAnimationFrame(tick);
                };
                requestAnimationFrame(tick);
                obs.unobserve(el);
            });
        },
        { threshold: 0.65 }
    );
    nums.forEach((n) => obs.observe(n));
}

/* ---------------- Copy actions ---------------- */
$("#copyEmail").addEventListener("click", async () => {
    const ok = await copyText(App.data.email);
    toast(
        ok ? "Copied" : "Oops",
        ok ? "Email copied to clipboard" : "Copy failed (browser restriction)"
    );
});
$("#emailBtn").addEventListener("click", async () => {
    const ok = await copyText(App.data.email);
    toast(
        ok ? "Copied" : "Oops",
        ok ? "Email copied to clipboard" : "Copy failed"
    );
});

/* ---------------- Form ---------------- */
/* ---------------- Back to top + clock ---------------- */
$("#backTop").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
function updateClock() {
    const d = new Date();
    const pad = (n) => String(n).padStart(2, "0");
    const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];
    const txt = `${months[d.getMonth()]} ${pad(
        d.getDate()
    )}, ${d.getFullYear()} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(
        d.getSeconds()
    )} hrs`;
    $("#clock").textContent = txt;
}
setInterval(updateClock, 1000);
updateClock();

/* ---------------- Resume button (demo) ---------------- */
$("#openResume").addEventListener("click", () => {
    window.open("FIles/Documents/cv-bts.pdf", "_blank");
});

/* ---------------- Magnetic buttons ---------------- */
function initMagnetic() {
    const mags = $$(".magnetic");
    mags.forEach((el) => {
        let r;
        el.addEventListener("mouseenter", () => {
            r = el.getBoundingClientRect();
        });
        el.addEventListener("mousemove", (e) => {
            if (!r) r = el.getBoundingClientRect();
            const x = e.clientX - r.left - r.width / 2;
            const y = e.clientY - r.top - r.height / 2;
            el.style.transform = `translate(${x * 0.12}px, ${y * 0.18}px)`;
        });
        el.addEventListener("mouseleave", () => {
            el.style.transform = "";
        });
    });
}

/* ---------------- Card tilt (profile) ---------------- */
function initTilt() {
    const card = $(".profileCard");
    if (!card) return;
    card.addEventListener("mousemove", (e) => {
        const r = card.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width;
        const py = (e.clientY - r.top) / r.height;
        const rx = (py - 0.5) * -10;
        const ry = (px - 0.5) * 12;
        card.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg) translateY(-2px)`;
    });
    card.addEventListener("mouseleave", () => {
        card.style.transform = "";
    });
}

/* ---------------- Skill filter buttons ---------------- */
function initFilters() {
    const btns = $$("#skills .filterBtn");
    btns.forEach((b) => {
        b.addEventListener("click", () => {
            btns.forEach((x) => x.classList.remove("active"));
            b.classList.add("active");
            renderSkills(b.dataset.filter);
            toast("Filter", b.textContent.trim());
        });
    });
}

function initCertFilters() {
    const btns = $$("#certifications .filterBtn");
    btns.forEach((b) => {
        b.addEventListener("click", () => {
            btns.forEach((x) => x.classList.remove("active"));
            b.classList.add("active");
            renderCertifications(b.dataset.filter);
            toast("Filter", b.textContent.trim());
        });
    });
}

function initProjectFilters() {
    const btns = $$("#projects .filterBtn");
    btns.forEach((b) => {
        b.addEventListener("click", () => {
            btns.forEach((x) => x.classList.remove("active"));
            b.classList.add("active");
            renderProjects(b.dataset.filter);
            toast("Filter", b.textContent.trim());
        });
    });
}

function initDocFilters() {
    const btns = $$("#documentation .filterBtn");
    btns.forEach((b) => {
        b.addEventListener("click", () => {
            btns.forEach((x) => x.classList.remove("active"));
            b.classList.add("active");
            renderDocumentation(b.dataset.filter);
            toast("Filter", b.textContent.trim());
        });
    });
}

/* ---------------- Name typing (tiny vibe) ---------------- */
function initNameType() {
    const el = $("#nameType");
    const full = el.textContent.trim();
    el.textContent = "";
    let i = 0;
    const tick = () => {
        i++;
        el.textContent = full.slice(0, i);
        if (i < full.length) setTimeout(tick, 55);
    };
    setTimeout(tick, 250);
}

/* ---------------- Particles canvas ---------------- */
function initCanvasFX() {
    const c = $("#fx");
    const ctx = c.getContext("2d", { alpha: true });

    let w = 0,
        h = 0,
        dpr = 1;
    const symbols = [
        "{",
        "}",
        "<",
        ">",
        "/",
        "*",
        "+",
        "=",
        ";",
        "&",
        "%",
        "$",
        "#",
        "@",
    ];
    const dots = [];

    function resize() {
        dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
        w = c.width = Math.floor(window.innerWidth * dpr);
        h = c.height = Math.floor(window.innerHeight * dpr);

        // Force le canvas en position fixe pour couvrir uniquement le viewport
        // Cela évite de dessiner des particules sur 5000px de hauteur
        c.style.position = "fixed";
        c.style.top = "0";
        c.style.left = "0";
        c.style.width = "100%";
        c.style.height = "100%";
        c.style.pointerEvents = "none";
        c.style.zIndex = "-1";

        dots.length = 0;

        const count = Math.floor(
            (window.innerWidth * window.innerHeight) / 25000
        );
        for (let i = 0; i < count; i++) {
            dots.push(makeDot());
        }
    }

    function makeDot() {
        return {
            x: Math.random() * w,
            y: Math.random() * h,
            vx: (Math.random() - 0.5) * 0.35 * dpr,
            vy: (Math.random() - 0.5) * 0.35 * dpr,
            r: (1.2 + Math.random() * 2.4) * dpr,
            a: 0.08 + Math.random() * 0.12,
            sym: symbols[(Math.random() * symbols.length) | 0],
            s: (11 + Math.random() * 12) * dpr,
        };
    }

    function step() {
        ctx.clearRect(0, 0, w, h);

        // dots
        for (const p of dots) {
            p.x += p.vx;
            p.y += p.vy;
            if (p.x < -50) p.x = w + 50;
            if (p.x > w + 50) p.x = -50;
            if (p.y < -50) p.y = h + 50;
            if (p.y > h + 50) p.y = -50;

            ctx.globalAlpha = p.a;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = "rgba(41,255,198,1)";
            ctx.fill();

            ctx.globalAlpha = p.a * 0.9;
            ctx.font = `${p.s}px ui-monospace`;
            ctx.fillStyle = "rgba(124,92,255,1)";
            ctx.fillText(p.sym, p.x + 10 * dpr, p.y - 10 * dpr);
        }

        // links
        ctx.globalAlpha = 0.06;
        ctx.strokeStyle = "rgba(255,255,255,1)";
        for (let i = 0; i < dots.length; i++) {
            for (let j = i + 1; j < dots.length; j++) {
                const a = dots[i],
                    b = dots[j];
                const dx = a.x - b.x,
                    dy = a.y - b.y;
                const distSq = dx * dx + dy * dy;
                if (distSq < (160 * dpr) ** 2) {
                    ctx.lineWidth = 1 * dpr;
                    ctx.beginPath();
                    ctx.moveTo(a.x, a.y);
                    ctx.lineTo(b.x, b.y);
                    ctx.stroke();
                }
            }
        }

        requestAnimationFrame(step);
    }

    window.addEventListener("resize", resize);
    
    resize();
    step();
}

/* ---------------- Init ---------------- */
function boot() {
    renderSnippet();
    renderSkills("all");
    renderTimeline();
    renderProjects();
    renderDocumentation();
    renderCertifications();
    renderVeille();

    initNameType();
    initScrollSpy();
    initFilters();
    initDocFilters();
    initCertFilters();
    initProjectFilters();
    animateStats();
    initMagnetic();
    initTilt();
    initCanvasFX();

    // Correction du background : force le fond à être fixe et couvrir tout l'écran
    // Cela évite qu'il se répète ou se coupe quand le contenu s'agrandit
    const app = $(".app");
    if (app) {
        app.style.backgroundRepeat = "no-repeat";
        app.style.backgroundAttachment = "fixed";
        app.style.backgroundSize = "cover";
        app.style.minHeight = "100vh";
    }
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundSize = "cover";

    toast("Opérationnel", "Portfolio chargé avec succès");
}

boot();
