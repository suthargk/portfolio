const ChromeIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="11" fill="#fff" />
    <path d="M12 12 L12 1 A11 11 0 0 1 21.526 17.5 Z" fill="#EA4335" />
    <path d="M12 12 L21.526 17.5 A11 11 0 0 1 2.474 17.5 Z" fill="#34A853" />
    <path d="M12 12 L2.474 17.5 A11 11 0 0 1 12 1 Z" fill="#FBBC05" />
    <circle cx="12" cy="12" r="4.6" fill="#4285F4" />
    <circle cx="12" cy="12" r="4.6" fill="none" stroke="#fff" strokeWidth="1.4" />
  </svg>
);

export default ChromeIcon;
