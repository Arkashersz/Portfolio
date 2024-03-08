import React from "react";
import { CreateClient } from "@prismicio/client";
import Link from "next/link"

export default async function Header() {
  const cliente = createCliente();
  const settings = await cliente.getSingle("settings");
  return (
    <header className="top-0 z-50 mx-auto max-w-7x1 md:sticky md:top-4">
        <nav>
            <ul>
                <li>
                    <Link href="/" aria-label="Home Page">
                        {settings.data.name}
                    </Link>
                </li>
                <li></li>
            </ul>
        </nav>
    </header>
  );
}
