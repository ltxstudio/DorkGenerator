const dorkTemplates = [
  // Basic Google Dorks
  {
    template: "site:{domain} inurl:{keyword}",
    description: "Searches for pages on a domain containing keywords in the URL.",
  },
  {
    template: "intitle:{keyword} filetype:pdf",
    description: "Finds PDF files with keywords in the title.",
  },
  {
    template: "site:{domain} \"{keyword}\"",
    description: "Searches for exact keyword matches on a specific domain.",
  },
  {
    template: "{keyword} ext:doc",
    description: "Searches for Word documents containing keywords.",
  },
  {
    template: "{keyword} ext:xls",
    description: "Searches for Excel spreadsheets containing keywords.",
  },

  // Search for specific text, file types, or content
  {
    template: "site:{domain} intext:{keyword}",
    description: "Searches for keywords in the text on a specific domain.",
  },
  {
    template: "filetype:pdf {keyword}",
    description: "Finds PDF files containing the keyword.",
  },
  {
    template: "\"index of\" {keyword}",
    description: "Finds directory listings related to the keyword.",
  },
  {
    template: "site:{domain} ext:php {keyword}",
    description: "Searches for PHP files on a specific domain with keywords.",
  },

  // Admin and login-related dorks
  {
    template: "site:{domain} intitle:admin",
    description: "Finds admin pages on a specific domain.",
  },
  {
    template: "inurl:login {keyword}",
    description: "Searches for login pages related to a keyword.",
  },
  {
    template: "inurl:password filetype:log",
    description: "Finds log files containing passwords.",
  },
  {
    template: "filetype:xls inurl:\"email\"",
    description: "Searches for Excel files containing email addresses.",
  },
  {
    template: "intitle:\"index of\" \"parent directory\" {keyword}",
    description: "Locates open directories for a given keyword.",
  },
  {
    template: "site:{domain} \"phpinfo()\"",
    description: "Searches for PHP configuration files on a domain.",
  },

  // Database and PHP-related dorks
  {
    template: "inurl:/phpmyadmin/ intext:{keyword}",
    description: "Searches for phpMyAdmin pages containing specific keywords.",
  },
  {
    template: "site:{domain} inurl:wp-admin",
    description: "Finds WordPress admin pages for a specific domain.",
  },
  {
    template: "site:{domain} filetype:sql",
    description: "Searches for SQL database dumps on a specific domain.",
  },
  {
    template: "site:{domain} filetype:xml",
    description: "Searches for XML files on a specific domain.",
  },
  {
    template: "filetype:env intext:DB_PASSWORD",
    description: "Finds exposed .env files containing database passwords.",
  },

  // Search for specific configuration files
  {
    template: "site:{domain} filetype:log",
    description: "Searches for log files on a specific domain.",
  },
  {
    template: "inurl:wp-content {keyword}",
    description: "Searches for WordPress content containing the keyword.",
  },
  {
    template: "filetype:txt {keyword}",
    description: "Finds text files containing the keyword.",
  },
  {
    template: "inurl:/admin/config.php",
    description: "Searches for configuration files in admin directories.",
  },
  {
    template: "inurl:\"/login.php?user=admin\"",
    description: "Finds login pages with admin username pre-filled.",
  },
  {
    template: "intitle:\"index of\" \"passwords\"",
    description: "Searches for open directories that list password files.",
  },

  // Advanced or niche dorks for vulnerability scanning and sensitive data
  {
    template: "intitle:\"index of\" \"backup\"",
    description: "Finds open directories containing backup files.",
  },
  {
    template: "inurl:/.git/ \"git\"",
    description: "Searches for exposed Git repositories.",
  },
  {
    template: "filetype:sql inurl:\"dump\"",
    description: "Searches for SQL dump files with the word 'dump' in the URL.",
  },
  {
    template: "inurl:/wp-content/plugins/ \"version\"",
    description: "Searches for WordPress plugins with version information exposed.",
  },
  {
    template: "inurl:/uploads/ \"filename\"",
    description: "Searches for uploaded files that match a specific filename.",
  },

  // Search for exposed credentials and sensitive data
  {
    template: "filetype:env intext:AWS_SECRET_KEY",
    description: "Searches for exposed AWS keys in environment files.",
  },
  {
    template: "filetype:env intext:FTP_PASSWORD",
    description: "Searches for exposed FTP passwords in environment files.",
  },
  {
    template: "intitle:\"index of\" \"secrets\"",
    description: "Searches for open directories containing secret files.",
  },
  {
    template: "inurl:/.htpasswd",
    description: "Finds exposed .htpasswd files (used for authentication).",
  },
  {
    template: "inurl:/.git/HEAD",
    description: "Searches for exposed Git repository HEAD files.",
  },

  // Exposed APIs and web services
  {
    template: "inurl:/api/ \"api_key\"",
    description: "Finds exposed API keys in URLs.",
  },
  {
    template: "inurl:/rest/ \"rest api\"",
    description: "Searches for RESTful APIs in URLs.",
  },
  {
    template: "inurl:/swagger/ \"swagger.json\"",
    description: "Finds Swagger documentation files exposed on the web.",
  },

  // Advanced vulnerability-related dorks
  {
    template: "intitle:\"index of\" \"database.sql\"",
    description: "Searches for exposed SQL databases in open directories.",
  },
  {
    template: "inurl:/cgi-bin/ \"error\"",
    description: "Searches for exposed CGI scripts that might return error messages with sensitive data.",
  },
  {
    template: "inurl:/wp-config.php",
    description: "Searches for exposed WordPress configuration files.",
  },
  {
    template: "filetype:bak inurl:\"config\"",
    description: "Searches for backup configuration files.",
  },
  {
    template: "inurl:/wp-json/ \"wp-json\"",
    description: "Search for WordPress JSON API endpoints.",
  },

  // Miscellaneous dorks for files, content, or assets
  {
    template: "intitle:\"index of\" \"images\"",
    description: "Searches for open directories containing image files.",
  },
  {
    template: "filetype:csv inurl:\"data\"",
    description: "Finds CSV files containing data in the URL.",
  },
  {
    template: "filetype:json inurl:\"api\"",
    description: "Searches for JSON files exposed via public APIs.",
  },
  {
    template: "inurl:/uploads/ filetype:jpg",
    description: "Searches for JPG image files in public uploads directories.",
  },
  {
    template: "inurl:/uploads/ filetype:png",
    description: "Searches for PNG image files in public uploads directories.",
  },
  {
    template: "site:{domain} filetype:conf",
    description: "Searches for configuration files on a specific domain.",
  },
  {
    template: "inurl:/admin/.git/ \"git\"",
    description: "Searches for exposed Git repositories in admin directories.",
  },
  {
    template: "inurl:/wp-includes/ \"wp-load.php\"",
    description: "Searches for exposed WordPress load files.",
  },
  {
    template: "filetype:log inurl:\"error_log\"",
    description: "Searches for error log files in URLs.",
  },
  {
    template: "inurl:/.env filetype:txt",
    description: "Searches for exposed environment variable files in plain text format.",
  },

  // Search for specific file types or exposed credentials
  {
    template: "intitle:\"index of\" \"wp-config.php\"",
    description: "Searches for exposed WordPress configuration files.",
  },
  {
    template: "inurl:/admin/ config.php",
    description: "Searches for configuration files in admin directories.",
  },
  {
    template: "inurl:/.env filetype:json",
    description: "Finds exposed environment files (JSON format).",
  },
  {
    template: "inurl:/upload/ filetype:exe",
    description: "Searches for uploaded executable files.",
  },
  {
    template: "inurl:/uploads/ filetype:pdf",
    description: "Searches for PDF files in public uploads directories.",
  },

  // Search for sensitive application data
  {
    template: "inurl:/phpinfo.php",
    description: "Searches for exposed PHP configuration information.",
  },
  {
    template: "inurl:/admin/ \"login\"",
    description: "Searches for login pages in admin directories.",
  },
  {
    template: "intitle:\"index of\" \"database.bak\"",
    description: "Searches for open directories containing backup database files.",
  },
  {
    template: "filetype:env intext:\"SECRET_KEY\"",
    description: "Searches for exposed secret keys in environment files.",
  },
  {
    template: "inurl:/wp-content/uploads/ \"index of\"",
    description: "Searches for open directories in WordPress upload folders.",
  },

  // Search for exposed or outdated APIs
  {
    template: "inurl:/api/v1/ \"access_token\"",
    description: "Searches for exposed API access tokens.",
  },
  {
    template: "filetype:json inurl:/api/v2/ \"api_key\"",
    description: "Searches for JSON files containing exposed API keys.",
  },
  {
    template: "inurl:/swagger/api/ \"swagger.yaml\"",
    description: "Finds Swagger YAML files exposed on public APIs.",
  },
  {
    template: "filetype:php inurl:/api/ \"api_key\"",
    description: "Searches for PHP files containing API keys in URLs.",
  },

  // Miscellaneous dorks for assets or specific content types
  {
    template: "intitle:\"index of\" \"downloads\"",
    description: "Searches for open directories containing downloadable files.",
  },
  {
    template: "inurl:/assets/ \"main.css\"",
    description: "Searches for exposed CSS files in public assets directories.",
  },
  {
    template: "filetype:md inurl:\"README\"",
    description: "Searches for README Markdown files exposed on the web.",
  },
  {
    template: "inurl:/public/ filetype:js",
    description: "Searches for JavaScript files in public directories.",
  },
  {
    template: "inurl:/uploads/ filetype:gif",
    description: "Searches for GIF image files in public uploads directories.",
  },

  // Search for additional vulnerabilities and server information
  {
    template: "inurl:/cgi-bin/ filetype:txt",
    description: "Searches for exposed CGI scripts in text format.",
  },
  {
    template: "intitle:\"index of\" \"config.json\"",
    description: "Searches for open directories containing configuration JSON files.",
  },
  {
    template: "filetype:ini inurl:\"configuration\"",
    description: "Searches for configuration INI files.",
  },
  {
    template: "inurl:/uploads/ filetype:mp4",
    description: "Searches for MP4 video files in public uploads directories.",
  },
  {
    template: "intitle:\"index of\" \"phpmyadmin\"",
    description: "Searches for open directories containing phpMyAdmin files.",
  },

  // Search for sensitive user data or personal information
  {
    template: "inurl:\"email\" filetype:xls",
    description: "Searches for Excel files containing email addresses.",
  },
  {
    template: "intitle:\"index of\" \"contact.txt\"",
    description: "Searches for open directories containing contact information files.",
  },
  {
    template: "inurl:/uploads/ filetype:vcf",
    description: "Searches for VCF (vCard) files in public uploads directories.",
  },
  {
    template: "filetype:csv inurl:\"sales\"",
    description: "Finds CSV files containing sales data.",
  },
  {
    template: "filetype:json inurl:\"user\"",
    description: "Finds JSON files containing user information.",
  },
];

export default dorkTemplates;
