interface IconProps {
  size: number;
  color: string;
}

interface AdvancedIconProps {
  size: number;
  iconColor: string;
  buttonColor: string;
}

const SearchIcon: React.FC<IconProps> = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.5 18C6.08172 18 2.5 14.4183 2.5 10C2.5 5.58172 6.08172 2 10.5 2C14.9183 2 18.5 5.58172 18.5 10C18.5 11.8487 17.8729 13.551 16.8199 14.9056L22.2071 20.2929L20.7929 21.7071L15.4056 16.3199C14.051 17.3729 12.3487 18 10.5 18ZM16.5 10C16.5 13.3137 13.8137 16 10.5 16C7.18629 16 4.5 13.3137 4.5 10C4.5 6.68629 7.18629 4 10.5 4C13.8137 4 16.5 6.68629 16.5 10Z"
      fill={color}
    />
  </svg>
);

const ArrowUpIcon: React.FC<IconProps> = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.4142 16C5.02367 16.3905 4.39051 16.3905 3.99998 16C3.60946 15.6095 3.60946 14.9763 3.99999 14.5858L11.2929 7.29289C11.6834 6.90237 12.3166 6.90237 12.7071 7.29289L20 14.5858C20.3905 14.9763 20.3905 15.6095 20 16C19.6095 16.3905 18.9763 16.3905 18.5858 16L12.7071 10.1213C12.3166 9.7308 11.6834 9.7308 11.2929 10.1213L5.4142 16Z"
      fill={color}
    />
  </svg>
);

const PlusIcon: React.FC<AdvancedIconProps> = ({
  buttonColor,
  iconColor,
  size,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 33 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.5 32C25.3366 32 32.5 24.8366 32.5 16C32.5 7.16344 25.3366 0 16.5 0C7.66344 0 0.5 7.16344 0.5 16C0.5 24.8366 7.66344 32 16.5 32Z"
      fill={buttonColor}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15 23.5C15 24.3284 15.6716 25 16.5 25C17.3284 25 18 24.3284 18 23.5V17.5H24C24.8284 17.5 25.5 16.8284 25.5 16C25.5 15.1716 24.8284 14.5 24 14.5H18V8.5C18 7.67157 17.3284 7 16.5 7C15.6716 7 15 7.67157 15 8.5V14.5H9C8.17157 14.5 7.5 15.1716 7.5 16C7.5 16.8284 8.17157 17.5 9 17.5H15V23.5Z"
      fill={iconColor}
    />
  </svg>
);

const MinusIcon: React.FC<AdvancedIconProps> = ({
  buttonColor,
  iconColor,
  size,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 33 33"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M31.5 16.9551C31.5 25.2394 24.7843 31.9551 16.5 31.9551C8.21573 31.9551 1.5 25.2394 1.5 16.9551C1.5 8.67081 8.21573 1.95508 16.5 1.95508C24.7843 1.95508 31.5 8.67081 31.5 16.9551Z"
      fill={buttonColor}
      stroke={buttonColor}
      strokeWidth="2"
    />
    <rect x="7.5" y="15.4551" width="18" height="3" rx="1.5" fill={iconColor} />
  </svg>
);

const CloseIcon: React.FC<AdvancedIconProps> = ({
  buttonColor,
  iconColor,
  size,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_2996_694)">
      <rect
        x="2"
        width="28"
        height="28"
        rx="14"
        fill={buttonColor}
        shapeRendering="crispEdges"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.7338 8.27531C21.3788 7.92036 20.8055 7.92036 20.4505 8.27531L16 12.7167L11.5495 8.26621C11.1945 7.91126 10.6212 7.91126 10.2662 8.26621C9.91126 8.62116 9.91126 9.19454 10.2662 9.54949L14.7167 14L10.2662 18.4505C9.91126 18.8055 9.91126 19.3788 10.2662 19.7338C10.6212 20.0887 11.1945 20.0887 11.5495 19.7338L16 15.2833L20.4505 19.7338C20.8055 20.0887 21.3788 20.0887 21.7338 19.7338C22.0887 19.3788 22.0887 18.8055 21.7338 18.4505L17.2833 14L21.7338 9.54949C22.0796 9.20364 22.0796 8.62116 21.7338 8.27531Z"
        fill={iconColor}
      />
    </g>
    <defs>
      <filter
        id="filter0_d_2996_694"
        x="0"
        y="0"
        width="32"
        height="32"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="2" />
        <feGaussianBlur stdDeviation="1" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_2996_694"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_2996_694"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export const CrossIcon: React.FC<AdvancedIconProps> = ({
  size,
  buttonColor,
  iconColor,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width={size} height={size} fill={buttonColor} />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M20.6894 7.3212C20.2753 6.90709 19.6064 6.90709 19.1923 7.3212L14 12.5028L8.80774 7.31058C8.39363 6.89647 7.72469 6.89647 7.31058 7.31058C6.89647 7.72469 6.89647 8.39363 7.31058 8.80774L12.5028 14L7.31058 19.1923C6.89647 19.6064 6.89647 20.2753 7.31058 20.6894C7.72469 21.1035 8.39363 21.1035 8.80774 20.6894L14 15.4972L19.1923 20.6894C19.6064 21.1035 20.2753 21.1035 20.6894 20.6894C21.1035 20.2753 21.1035 19.6064 20.6894 19.1923L15.4972 14L20.6894 8.80774C21.0929 8.40425 21.0929 7.72469 20.6894 7.3212Z"
      fill={iconColor}
    />
  </svg>
);

export const MenuIcon: React.FC<IconProps> = ({ color, size }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="16" height="2" rx="1" fill={color} />
    <rect y="7" width="16" height="2" rx="1" fill={color} />
    <rect y="14" width="16" height="2" rx="1" fill={color} />
  </svg>
);

export { SearchIcon, ArrowUpIcon, PlusIcon, MinusIcon, CloseIcon };
