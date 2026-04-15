#!/usr/bin/env node

/**
 * MCP Server Entry Point
 * 
 * This is the standalone entry point for running the MCP server.
 * It imports and executes the main server logic from mcp-server.ts
 */

import { main } from './mcp-server.js';

// Start the server
main().catch((error) => {
    console.error("Failed to start MCP server:", error);
    process.exit(1);
});