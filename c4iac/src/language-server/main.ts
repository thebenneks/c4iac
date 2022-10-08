import { startLanguageServer } from 'langium';
import { NodeFileSystem } from 'langium/node';
import { createConnection, ProposedFeatures } from 'vscode-languageserver/node';
import { createC4IacServices } from './c-4-iac-module';

// Create a connection to the client
const connection = createConnection(ProposedFeatures.all);

// Inject the shared services and language-specific services
const { shared } = createC4IacServices({ connection, ...NodeFileSystem });

// Start the language server with the shared services
startLanguageServer(shared);
