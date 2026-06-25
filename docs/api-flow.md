# API Flow Documentation

This document describes the full request lifecycle.

Client → Express Route → Service Layer → CurseForge API Client → Response Formatter → Client

The system is designed to avoid direct external API exposure to the frontend.
