# ByteLink

**ByteLink** is a Link Shortener application built using React for the frontend, with user authentication powered by Supabase. It provides users with a secure and user-friendly way to shorten URLs, track clicks, and manage their links.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User Authentication**: Secure login and signup using Supabase’s authentication.
- **Link Shortening**: Shorten long URLs for easy sharing.
- **Link Management**: View, edit, and delete shortened links.
- **Link Analytics**: Track the number of clicks for each shortened link (optional).
- **Responsive Design**: Works seamlessly on mobile, tablet, and desktop screens.

## Tech Stack

- **Frontend**: React, JavaScript, CSS
- **Authentication**: Supabase
- **Database**: Supabase (PostgreSQL for storage)
- **Hosting**: (Add here if hosted on platforms like Vercel, Netlify, etc.)

## Setup and Installation

### Prerequisites

- Node.js and npm installed on your machine.
- A Supabase account with a project set up for authentication and database use.

### Installation Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/bytelink.git
   cd bytelink```

2. **Install all dependencies**:
   
   - Run the following command to install the necessary packages specified in the `package.json` file:
     
     ```bash
     npm install
     ```
3. **Setup Supabase**:

   - Go to your [Supabase Dashboard](https://supabase.io) and create a new project if you haven't already.
   - In your project, set up a database schema to store links (for example, create a `links` table with fields such as `id`, `original_url`, `shortened_url`, `user_id`, and `click_count`).
   - Retrieve your Supabase API URL and Anonymous Key from the Supabase project settings.
   - In the root directory of your project, create a `.env` file and add the following environment variables:

     ```env
     REACT_APP_SUPABASE_URL=your_supabase_project_url
     REACT_APP_SUPABASE_ANON_KEY=your_supabase_anon_key
     ```

   - Save the `.env` file. This will allow your project to connect to Supabase for authentication and database storage.

