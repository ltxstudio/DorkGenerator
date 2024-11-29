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
  {
    template: "site:{domain} inurl:/user/ filetype:xml",
    description: "Finds exposed user data in XML files on a specific domain.",
  },
  {
    template: "intitle:\"index of\" \"user_info.csv\"",
    description: "Searches for open directories containing user information in CSV format.",
  },
  {
    template: "inurl:/admin/ \"configuration\" filetype:json",
    description: "Searches for configuration JSON files within admin directories.",
  },
  {
    template: "inurl:/api/v1/ \"access_key\"",
    description: "Finds exposed API access keys in v1 API URLs.",
  },
  {
    template: "site:{domain} filetype:cfg",
    description: "Searches for configuration files with .cfg extension on a specific domain.",
  },

  // Searching for exposed backups or sensitive files
  {
    template: "intitle:\"index of\" \"backup.zip\"",
    description: "Searches for open directories containing backup ZIP files.",
  },
  {
    template: "filetype:bak inurl:\"backup\"",
    description: "Searches for backup files with .bak extension in URLs.",
  },
  {
    template: "inurl:/backup/ filetype:tar",
    description: "Searches for TAR archive files in backup directories.",
  },
  {
    template: "filetype:sql inurl:\"db_backup\"",
    description: "Finds SQL database backup files in URLs.",
  },
  {
    template: "intitle:\"index of\" \"mongodb_backup\"",
    description: "Searches for open directories containing MongoDB backup files.",
  },

  // Searching for exposed web services, scripts, or services
  {
    template: "inurl:/webservice/ \"API key\"",
    description: "Searches for exposed API keys in web service URLs.",
  },
  {
    template: "inurl:/restapi/ \"access_token\"",
    description: "Finds exposed access tokens in RESTful API URLs.",
  },
  {
    template: "filetype:php inurl:/service/ \"api_secret\"",
    description: "Searches for exposed API secrets in PHP files under service directories.",
  },
  {
    template: "inurl:/soap/ \"WSDL\"",
    description: "Searches for exposed WSDL (Web Service Description Language) files in SOAP web services.",
  },
  {
    template: "intitle:\"index of\" \"swagger.yaml\"",
    description: "Searches for exposed Swagger YAML documentation files in open directories.",
  },

  // Searching for exposed credentials and sensitive data
  {
    template: "inurl:/config/ \"db_password\"",
    description: "Searches for exposed database password information in config files.",
  },
  {
    template: "filetype:env intext:\"API_SECRET\"",
    description: "Searches for environment files (.env) containing API secret keys.",
  },
  {
    template: "inurl:/uploads/ \"AWS_ACCESS_KEY\"",
    description: "Searches for uploaded files that contain AWS access keys.",
  },
  {
    template: "intitle:\"index of\" \"secrets.json\"",
    description: "Searches for exposed JSON files containing secrets in open directories.",
  },
  {
    template: "inurl:/admin/.git/ \"git\"",
    description: "Searches for exposed Git repositories in admin directories.",
  },

  // Searching for exposed administrative or login pages
  {
    template: "inurl:/admin/ \"login.php\"",
    description: "Finds admin login pages within admin directories.",
  },
  {
    template: "intitle:\"index of\" \"admin_login\"",
    description: "Searches for open directories containing admin login pages.",
  },
  {
    template: "site:{domain} inurl:/admin/ \"login\"",
    description: "Searches for admin login pages on a specific domain.",
  },
  {
    template: "intitle:\"index of\" \"admin_config\"",
    description: "Searches for open directories containing admin configuration files.",
  },

  // Searching for exposed log or error files
  {
    template: "inurl:/logs/ filetype:log",
    description: "Searches for log files in public log directories.",
  },
  {
    template: "intitle:\"index of\" \"error_log\"",
    description: "Searches for open directories containing error logs.",
  },
  {
    template: "inurl:/admin/logs/ filetype:log",
    description: "Searches for log files in admin log directories.",
  },
  {
    template: "intitle:\"index of\" \"access_log\"",
    description: "Searches for open directories containing access logs.",
  },

  // Searching for sensitive user data or credentials in file paths
  {
    template: "inurl:/users/ filetype:csv",
    description: "Searches for user-related CSV files in URLs.",
  },
  {
    template: "intitle:\"index of\" \"admin_users.txt\"",
    description: "Searches for open directories containing admin user text files.",
  },
  {
    template: "filetype:json inurl:/user/ \"password\"",
    description: "Searches for JSON files containing passwords in user directories.",
  },
  {
    template: "inurl:/uploads/ filetype:xls",
    description: "Searches for exposed Excel files in public uploads directories.",
  },

  // Searching for exposed application files or assets
  {
    template: "intitle:\"index of\" \"application.json\"",
    description: "Searches for open directories containing application configuration JSON files.",
  },
  {
    template: "inurl:/assets/ filetype:scss",
    description: "Searches for SCSS (Sass) files exposed in public asset directories.",
  },
  {
    template: "inurl:/scripts/ filetype:js",
    description: "Searches for exposed JavaScript files in public scripts directories.",
  },
  {
    template: "inurl:/css/ filetype:css",
    description: "Searches for exposed CSS files in public directories.",
  },
  {
    template: "intitle:\"index of\" \"uploads.zip\"",
    description: "Searches for open directories containing ZIP files in upload directories.",
  },
  {
    template: "intitle:\"index of\" \"user_data.json\"",
    description: "Searches for open directories containing user data in JSON format.",
  },
  {
    template: "filetype:txt inurl:\"passwords\"",
    description: "Searches for plain text files containing the word 'passwords' in the URL.",
  },
  {
    template: "inurl:/uploads/ filetype:pdf",
    description: "Searches for PDF files in publicly exposed uploads directories.",
  },
  {
    template: "inurl:/secure/ filetype:xml",
    description: "Searches for exposed XML files in secure directories.",
  },

  // Exposed backup files or configuration dumps
  {
    template: "inurl:/backup/ filetype:tar.gz",
    description: "Finds TAR.GZ backup archive files in exposed backup directories.",
  },
  {
    template: "intitle:\"index of\" \"config.json\"",
    description: "Searches for open directories containing configuration JSON files.",
  },
  {
    template: "inurl:/dump/ filetype:sql",
    description: "Searches for SQL dump files exposed in public dump directories.",
  },
  {
    template: "inurl:/backups/ filetype:zip",
    description: "Searches for ZIP backup files in publicly exposed backup directories.",
  },

  // Searching for exposed APIs and services
  {
    template: "inurl:/api/ \"api_key\"",
    description: "Searches for URLs containing exposed API keys in public API endpoints.",
  },
  {
    template: "filetype:env intext:\"DATABASE_PASSWORD\"",
    description: "Finds exposed environment files containing database passwords.",
  },
  {
    template: "inurl:/wp-json/ \"wp-json\"",
    description: "Searches for exposed WordPress JSON API endpoints.",
  },
  {
    template: "intitle:\"index of\" \"swagger.json\"",
    description: "Searches for open directories containing Swagger documentation JSON files.",
  },

  // Searching for vulnerabilities, sensitive configurations, and secrets
  {
    template: "intitle:\"index of\" \"admin_config.php\"",
    description: "Finds open directories containing exposed admin configuration PHP files.",
  },
  {
    template: "inurl:/cgi-bin/ \"error_log\"",
    description: "Searches for exposed CGI scripts that may return sensitive error log data.",
  },
  {
    template: "filetype:bak inurl:\"config_backup\"",
    description: "Searches for backup configuration files with the .bak extension.",
  },
  {
    template: "intitle:\"index of\" \"db_config.php\"",
    description: "Searches for open directories containing database configuration PHP files.",
  },

  // Searching for exposed server information and headers
  {
    template: "inurl:/server-status \"Apache\"",
    description: "Searches for exposed Apache server status pages that contain detailed information.",
  },
  {
    template: "inurl:/server-status \"nginx\"",
    description: "Searches for exposed Nginx server status pages that contain detailed server information.",
  },
  {
    template: "intitle:\"index of\" \"nginx.conf\"",
    description: "Searches for open directories containing exposed Nginx configuration files.",
  },
  {
    template: "inurl:/server-info \"Apache Server\"",
    description: "Finds Apache server info pages with exposed server details.",
  },

  // Searching for vulnerable services or pages
  {
    template: "inurl:/wp-content/ \"wp-config.php\"",
    description: "Searches for exposed WordPress configuration files under the wp-content directory.",
  },
  {
    template: "inurl:/phpmyadmin/ intext:\"Welcome to phpMyAdmin\"",
    description: "Searches for exposed phpMyAdmin pages, which may indicate vulnerable web databases.",
  },
  {
    template: "inurl:/phpmyadmin/ \"error\"",
    description: "Searches for phpMyAdmin URLs that expose error messages, which may help identify vulnerabilities.",
  },
  {
    template: "inurl:/admin/ \"login\"",
    description: "Searches for exposed admin login pages across websites.",
  },

  // Searching for exposed files with sensitive data or personal info
  {
    template: "intitle:\"index of\" \"email_list.txt\"",
    description: "Searches for open directories containing email list text files.",
  },
  {
    template: "inurl:/uploads/ filetype:csv",
    description: "Searches for exposed CSV files in public uploads directories, which might contain personal or sensitive data.",
  },
  {
    template: "inurl:/data/ filetype:json",
    description: "Searches for JSON files containing potentially sensitive data exposed in public data directories.",
  },
  {
    template: "inurl:/logs/ filetype:log",
    description: "Searches for log files in public logs directories, which might contain sensitive information or errors.",
  },

  // Searching for exposed source code or application logic
  {
    template: "inurl:/scripts/ filetype:js",
    description: "Searches for exposed JavaScript files in public script directories.",
  },
  {
    template: "inurl:/includes/ filetype:php",
    description: "Searches for exposed PHP files in public include directories.",
  },
  {
    template: "filetype:py inurl:/scripts/ \"def\"",
    description: "Searches for Python script files in public directories that may contain sensitive functions or logic.",
  },
  {
    template: "inurl:/uploads/ filetype:exe",
    description: "Searches for executable files in uploaded file directories, potentially harmful files.",
  },

  // Miscellaneous dorks for exposed assets or web directories
  {
    template: "intitle:\"index of\" \"assets/\"",
    description: "Searches for open directories containing public assets like images, CSS, JavaScript files.",
  },
  {
    template: "inurl:/public/ filetype:css",
    description: "Searches for exposed CSS files in public directories.",
  },
  {
    template: "intitle:\"index of\" \"images/\"",
    description: "Finds open directories containing image files like JPG, PNG, or GIF.",
  },
  {
    template: "inurl:/files/ filetype:pdf",
    description: "Searches for PDF files in exposed file directories.",
  },
  {
    template: "intitle:\"index of\" \"config.yaml\"",
    description: "Searches for open directories containing exposed YAML configuration files.",
  },
  {
    template: "inurl:/uploads/ filetype:log",
    description: "Searches for log files in public uploads directories that might contain sensitive data or error messages.",
  },
  {
    template: "filetype:txt inurl:\"api_key\"",
    description: "Searches for exposed API keys in plain text files.",
  },
  {
    template: "intitle:\"index of\" \"credentials\"",
    description: "Searches for open directories containing files related to credentials.",
  },

  // Searching for exposed backup files
  {
    template: "inurl:/backups/ filetype:tar",
    description: "Searches for TAR backup files exposed in public backup directories.",
  },
  {
    template: "intitle:\"index of\" \"backup\"",
    description: "Searches for open directories that contain backup files.",
  },
  {
    template: "inurl:/backup/ filetype:gz",
    description: "Searches for GZ compressed backup files exposed in public backup directories.",
  },

  // Searching for exposed databases and data dumps
  {
    template: "filetype:sql inurl:\"database_dump\"",
    description: "Searches for exposed SQL database dumps with the keyword 'database_dump' in the URL.",
  },
  {
    template: "intitle:\"index of\" \"database.backup\"",
    description: "Searches for open directories containing database backup files.",
  },
  {
    template: "inurl:/data/ filetype:csv",
    description: "Searches for CSV files in publicly exposed data directories that might contain sensitive information.",
  },

  // Searching for exposed configuration files or source code
  {
    template: "filetype:json inurl:\"config\"",
    description: "Searches for JSON configuration files exposed on public URLs.",
  },
  {
    template: "intitle:\"index of\" \"web.config\"",
    description: "Searches for open directories containing Microsoft IIS web.config files.",
  },
  {
    template: "inurl:/config/ filetype:php",
    description: "Searches for exposed PHP configuration files in public config directories.",
  },

  // Searching for exposed login pages or admin interfaces
  {
    template: "inurl:/admin/ filetype:php",
    description: "Searches for exposed admin PHP files in public admin directories.",
  },
  {
    template: "inurl:/login/ filetype:html",
    description: "Searches for login pages in exposed public login directories.",
  },
  {
    template: "inurl:/wp-login.php",
    description: "Finds the WordPress login page exposed publicly.",
  },

  // Searching for exposed secrets or environment variables
  {
    template: "filetype:env intext:\"SECRET_KEY\"",
    description: "Searches for exposed environment files containing SECRET_KEY.",
  },
  {
    template: "filetype:env intext:\"AWS_ACCESS_KEY_ID\"",
    description: "Finds environment files that contain AWS Access Keys.",
  },
  {
    template: "inurl:/etc/ \"password\"",
    description: "Searches for exposed password files within public /etc directories.",
  },

  // Searching for exposed APIs or Web Services
  {
    template: "inurl:/api/v1/ \"api_key\"",
    description: "Searches for exposed API keys in public API v1 endpoints.",
  },
  {
    template: "inurl:/rest/api/ \"oauth2\"",
    description: "Searches for exposed OAuth2 API endpoints in public REST APIs.",
  },
  {
    template: "inurl:/swagger/ filetype:json",
    description: "Finds exposed Swagger API documentation in JSON format.",
  },

  // Searching for open directories and file listings
  {
    template: "intitle:\"index of\" \"uploads\"",
    description: "Searches for open directories listing uploaded files.",
  },
  {
    template: "intitle:\"index of\" \"files/\"",
    description: "Searches for open directories containing files in public directories.",
  },
  {
    template: "intitle:\"index of\" \"media/\"",
    description: "Searches for open directories containing media files like images, videos, etc.",
  },

  // Searching for exposed admin or configuration URLs
  {
    template: "inurl:/admin/ \"config.php\"",
    description: "Searches for exposed configuration files located under the /admin/ directory.",
  },
  {
    template: "inurl:/config/ \"settings.php\"",
    description: "Finds exposed PHP configuration files in public /config directories.",
  },
  {
    template: "inurl:/settings/ filetype:xml",
    description: "Searches for exposed XML configuration files in public settings directories.",
  },

  // Miscellaneous searches for potentially useful files
  {
    template: "inurl:/temp/ filetype:txt",
    description: "Searches for exposed text files in public /temp/ directories.",
  },
  {
    template: "filetype:log inurl:\"error_log\"",
    description: "Searches for error log files that may contain sensitive information.",
  },
  {
    template: "intitle:\"index of\" \"images/\" filetype:jpg",
    description: "Searches for open directories containing JPG image files.",
  },

  // Searching for exposed user-related information
  {
    template: "filetype:txt inurl:\"usernames\"",
    description: "Searches for exposed text files that may contain a list of usernames.",
  },
  {
    template: "intitle:\"index of\" \"user_data.csv\"",
    description: "Searches for open directories containing user data in CSV files.",
  },
  {
    template: "inurl:/users/ filetype:json",
    description: "Searches for exposed JSON files containing user-related data.",
  },
  {
    template: "site:{domain} inurl:{keyword} ext:php",
    description: "Searches for PHP files containing a keyword within the URL of a specific domain.",
  },
  {
    template: "site:{domain} inurl:{keyword} ext:html",
    description: "Searches for HTML files containing a keyword in the URL of a specific domain.",
  },
  {
    template: "site:{domain} inurl:{keyword} ext:js",
    description: "Searches for JavaScript files containing a keyword in the URL of a specific domain.",
  },
  
  // Searching for specific types of files within the URL
  {
    template: "site:{domain} inurl:{keyword} filetype:pdf",
    description: "Searches for PDF files containing a keyword in the URL of a specific domain.",
  },
  {
    template: "site:{domain} inurl:{keyword} filetype:txt",
    description: "Searches for text files containing a keyword in the URL of a specific domain.",
  },
  
  // Searching for pages with specific titles
  {
    template: "site:{domain} intitle:{keyword}",
    description: "Searches for pages on a specific domain with a keyword in the page title.",
  },
  {
    template: "site:{domain} intitle:\"login\"",
    description: "Searches for login pages on a specific domain.",
  },
  {
    template: "site:{domain} intitle:\"admin\"",
    description: "Searches for admin pages on a specific domain.",
  },
  
  // Searching for specific file types containing keywords
  {
    template: "filetype:{ext} {keyword}",
    description: "Searches for files of a specific type (e.g., PDF, DOC, XLS) containing the specified keyword.",
  },
  {
    template: "filetype:{ext} inurl:{keyword}",
    description: "Searches for files of a specific type with a keyword in the URL.",
  },
  
  // Searching for specific content inside a file or page
  {
    template: "site:{domain} intext:{keyword}",
    description: "Searches for pages on a domain containing the specified keyword in the page content.",
  },
  {
    template: "filetype:log intext:{keyword}",
    description: "Searches for log files containing a keyword in their content.",
  },
  
  // Searching for specific keywords in specific directories
  {
    template: "site:{domain} inurl:/admin/ {keyword}",
    description: "Searches for pages within the /admin/ directory of a specific domain containing a keyword.",
  },
  {
    template: "site:{domain} inurl:/config/ {keyword}",
    description: "Searches for pages within the /config/ directory of a specific domain containing a keyword.",
  },
  
  // Searching for specific types of vulnerabilities
  {
    template: "inurl:/wp-admin/ {keyword}",
    description: "Searches for WordPress admin pages with a specified keyword.",
  },
  {
    template: "site:{domain} inurl:\"/phpmyadmin/\" {keyword}",
    description: "Searches for phpMyAdmin pages on a domain containing a keyword.",
  },
  {
    template: "site:{domain} inurl:\"/cgi-bin/\" {keyword}",
    description: "Searches for exposed CGI scripts containing a keyword on a specific domain.",
  },
  
  // Searching for exposed credentials or keys
  {
    template: "filetype:env intext:\"AWS_ACCESS_KEY_ID\"",
    description: "Searches for environment files containing exposed AWS Access Key IDs.",
  },
  {
    template: "filetype:env intext:\"FTP_PASSWORD\"",
    description: "Searches for environment files containing exposed FTP passwords.",
  },
  
  // Searching for directories or data dumps
  {
    template: "intitle:\"index of\" {keyword}",
    description: "Searches for open directories with the specified keyword in their title.",
  },
  {
    template: "inurl:\"/backup/\" {keyword}",
    description: "Searches for backup directories containing a keyword in the URL.",
  },
  {
    template: "inurl:\"/data/\" {keyword}",
    description: "Searches for data directories containing a keyword in the URL.",
  },
  
  // Searching for exposed databases and dumps
  {
    template: "filetype:sql inurl:{keyword}",
    description: "Searches for SQL files containing a keyword in their URL.",
  },
  {
    template: "inurl:\"/dump/\" {keyword}",
    description: "Searches for exposed database dump directories containing a keyword.",
  },
  
  // Searching for files in specific paths
  {
    template: "site:{domain} inurl:/uploads/ {keyword}",
    description: "Searches for files in the /uploads/ directory of a specific domain containing a keyword.",
  },
  {
    template: "site:{domain} inurl:/images/ {keyword}",
    description: "Searches for image files in the /images/ directory of a specific domain containing a keyword.",
  },
  {
    template: "site:{domain} inurl:/docs/ {keyword}",
    description: "Searches for documentation files in the /docs/ directory of a specific domain containing a keyword.",
  },
];

export default dorkTemplates;
