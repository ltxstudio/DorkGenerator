const additionalDorks = [
  // Search for Exposed Sensitive Data & Credentials
  {
    template: "filetype:env intext:\"AWS_ACCESS_KEY_ID\"",
    description: "Searches for exposed AWS Access Keys in environment files.",
  },
  {
    template: "filetype:env intext:\"AWS_SECRET_ACCESS_KEY\"",
    description: "Searches for exposed AWS Secret Keys in environment files.",
  },
  {
    template: "filetype:env intext:\"GCP_API_KEY\"",
    description: "Searches for exposed GCP API Keys in environment files.",
  },
  {
    template: "filetype:env intext:\"AZURE_CLIENT_SECRET\"",
    description: "Searches for exposed Azure client secrets.",
  },
  {
    template: "filetype:env intext:\"DB_PASSWORD\"",
    description: "Finds exposed database passwords in environment files.",
  },
  {
    template: "filetype:env intext:\"DB_USER\"",
    description: "Finds exposed database usernames in environment files.",
  },
  {
    template: "filetype:sql inurl:\"password\"",
    description: "Searches for SQL files containing password information.",
  },

  // Exposed Web Services & APIs
  {
    template: "inurl:/wp-json/ \"wp-json\"",
    description: "Search for exposed WordPress JSON API endpoints.",
  },
  {
    template: "inurl:\"/swagger/\" \"swagger.json\"",
    description: "Finds exposed Swagger API documentation.",
  },
  {
    template: "inurl:\"/rest/\" \"rest api\"",
    description: "Finds exposed RESTful APIs.",
  },
  {
    template: "inurl:/api/ \"api_key\"",
    description: "Finds exposed API keys in URLs.",
  },
  {
    template: "inurl:\"/api/v1\" \"access_token\"",
    description: "Searches for exposed API tokens in version 1 endpoints.",
  },

  // Specific Exposed Configuration Files
  {
    template: "filetype:log inurl:\"/var/log/\"",
    description: "Searches for exposed log files in server directories.",
  },
  {
    template: "filetype:bak inurl:\"config\"",
    description: "Searches for backup configuration files exposed to the public.",
  },
  {
    template: "intitle:\"index of\" \"config.php\"",
    description: "Searches for exposed PHP configuration files.",
  },
  {
    template: "inurl:\"/wp-config.php\"",
    description: "Finds exposed WordPress configuration files.",
  },
  {
    template: "inurl:/wp-admin/ \"index of\"",
    description: "Searches for exposed WordPress admin pages.",
  },
  {
    template: "inurl:/wp-login.php",
    description: "Finds exposed WordPress login pages.",
  },

  // Exposed Personal Identifiable Information (PII)
  {
    template: "filetype:csv inurl:\"contact\"",
    description: "Searches for exposed CSV files containing contact information.",
  },
  {
    template: "filetype:csv inurl:\"user\"",
    description: "Searches for exposed CSV files containing user data.",
  },
  {
    template: "filetype:csv inurl:\"email\"",
    description: "Searches for exposed CSV files containing email addresses.",
  },
  {
    template: "filetype:csv inurl:\"phonebook\"",
    description: "Searches for CSV files containing phonebook information.",
  },
  {
    template: "filetype:pdf inurl:\"social security\"",
    description: "Searches for PDF documents containing Social Security numbers.",
  },
  {
    template: "filetype:pdf inurl:\"passport\"",
    description: "Searches for exposed passport information in PDF files.",
  },
  {
    template: "filetype:xls inurl:\"employee\"",
    description: "Searches for exposed Excel files containing employee data.",
  },

  // Sensitive Files, Backups, and Miscellaneous Data
  {
    template: "filetype:bak inurl:\"database\"",
    description: "Searches for exposed database backup files.",
  },
  {
    template: "filetype:bak inurl:\"config\"",
    description: "Finds exposed configuration backup files.",
  },
  {
    template: "intitle:\"index of\" \"backup.zip\"",
    description: "Finds exposed ZIP backup files in open directories.",
  },
  {
    template: "intitle:\"index of\" \"logs\"",
    description: "Searches for open directories revealing log files.",
  },

  // Exposed Directory Listings
  {
    template: "intitle:\"index of\" \"logs\"",
    description: "Searches for open directories containing logs.",
  },
  {
    template: "intitle:\"index of\" \"backups\"",
    description: "Searches for exposed backups in open directories.",
  },
  {
    template: "intitle:\"index of\" \"files\"",
    description: "Searches for open directories revealing files.",
  },
  {
    template: "intitle:\"index of\" \"uploads\"",
    description: "Finds exposed uploads directories that may contain files.",
  },
  {
    template: "intitle:\"index of\" \"uploads/\"",
    description: "Searches for publicly exposed uploads folders.",
  },

  // Advanced Exploits and Vulnerabilities
  {
    template: "inurl:wp-admin \"error\"",
    description: "Searches for WordPress admin pages returning error messages.",
  },
  {
    template: "inurl:wp-content/plugins \"version\"",
    description: "Searches for exposed WordPress plugin versions.",
  },
  {
    template: "inurl:/phpmyadmin/ intext:\"error\"",
    description: "Finds exposed phpMyAdmin pages that return errors.",
  },
  {
    template: "filetype:sql inurl:\"dump\"",
    description: "Searches for exposed SQL dumps.",
  },
  {
    template: "intitle:\"index of\" \"database.sql\"",
    description: "Finds exposed database SQL files in open directories.",
  },
  {
    template: "inurl:\"/cgi-bin/\" \"error\"",
    description: "Searches for exposed CGI scripts returning error messages.",
  },
  {
    template: "inurl:\"/wp-config.php\"",
    description: "Searches for exposed WordPress configuration files.",
  },

  // Other Specific Exploits
  {
    template: "inurl:\"/wp-json/\" \"site_url\"",
    description: "Finds WordPress JSON API endpoints revealing site URL.",
  },
  {
    template: "filetype:php inurl:\"debug\"",
    description: "Searches for PHP files containing debug information.",
  },
  {
    template: "filetype:php inurl:\"error_log\"",
    description: "Finds exposed PHP error log files.",
  },
  {
    template: "filetype:txt inurl:\"passwords\"",
    description: "Finds exposed password files in text format.",
  },
  {
    template: "inurl:/tmp/ \"core dump\"",
    description: "Searches for exposed core dumps left in public directories.",
  },

  // Miscellaneous Dorks
  {
    template: "filetype:json inurl:\"api\"",
    description: "Searches for exposed JSON files related to APIs.",
  },
  {
    template: "inurl:\"/tmp/\" \"core dump\"",
    description: "Searches for core dumps in temporary directories.",
  },
  {
    template: "inurl:\"/uploads/\" filetype:jpg",
    description: "Searches for exposed JPG images in public upload directories.",
  },
  {
    template: "inurl:\"/uploads/\" filetype:png",
    description: "Searches for exposed PNG images in public upload directories.",
  },
  {
    template: "filetype:csv inurl:\"data\"",
    description: "Finds CSV files containing data in the URL.",
  },

  // Advanced and Niche Dorks
  {
    template: "inurl:\"/wp-json/\" \"user\"",
    description: "Finds exposed WordPress JSON endpoints containing user information.",
  },
  {
    template: "intitle:\"index of\" \"admin\"",
    description: "Finds open directories revealing admin-related files.",
  },
  {
    template: "inurl:\"/admin/\" \"index of\"",
    description: "Finds open directories revealing admin pages.",
  },
  {
    template: "inurl:\"/config/\" \"index of\"",
    description: "Searches for exposed config directories.",
  },
  {
    template: "filetype:txt inurl:\"secrets.txt\"",
    description: "Finds exposed text files containing secrets.",
  },
  {
    template: "inurl:\"/api/\" \"api_key\"",
    description: "Searches for exposed API keys in URLs.",
  },
  {
    template: "filetype:json inurl:\"config\"",
    description: "Searches for exposed JSON configuration files.",
  },
];

export default [...dorkTemplates, ...additionalDorks];
