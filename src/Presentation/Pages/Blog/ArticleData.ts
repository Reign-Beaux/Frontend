import type { ReactNode } from "react";
import { Secrets } from "./Articles/Secrets/Secrets";
import { WindowsServices } from "./Articles/WindowsServices/WindowsServices";

export interface BlogPost {
    id: string;
    title: string;
    summary: string;
    createdAt: Date;
    slug: string;
    component: () => ReactNode;
}

export const articles: BlogPost[] = [
    {
        id: "1",
        title: "Secretos de Usuario y Variables de Entorno en proyectos .NET",
        summary: "Aprende a manejar información sensible en tus proyectos .NET de forma segura utilizando User Secrets y Variables de Entorno.",
        createdAt: new Date("2025-12-14"),
        slug: "secrets-dotnet",
        component: Secrets,
    },
    {
        id: "2",
        title: "Servicios de Windows con .NET",
        summary: "Descubre cómo crear, configurar y desplegar Servicios de Windows robustos utilizando .NET y Worker Services.",
        createdAt: new Date("2025-12-14"),
        slug: "windows-services-dotnet",
        component: WindowsServices,
    },
];
