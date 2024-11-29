const dorkTemplates = [
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
];

export default dorkTemplates;
