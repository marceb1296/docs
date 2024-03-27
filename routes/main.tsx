import React from "react";
import { createRoot } from "react-dom/client";

import CryptoAuthDocs from "./cryptoAuthDocs";

const root = createRoot(document.getElementById("app") as HTMLElement);

/**
 * Documentation for crypto_auth
 * A Token base authentication
 * for Django projects
 */

root.render(
	<React.StrictMode>
		<CryptoAuthDocs />
	</React.StrictMode>
);
