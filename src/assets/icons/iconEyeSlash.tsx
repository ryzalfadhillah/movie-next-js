export default function IconEyeSlash({
    width = 20,
    height = 20,
    color = "#404040",
    ...props
  }) {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M13.53 8.47004L8.47004 13.53C7.82004 12.88 7.42004 11.99 7.42004 11C7.42004 9.02 9.02 7.42004 11 7.42004C11.99 7.42004 12.88 7.82004 13.53 8.47004Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.82 4.76998C15.07 3.44998 13.07 2.72998 11 2.72998C7.46997 2.72998 4.17997 4.80998 1.88997 8.40998C0.989966 9.82 0.989966 12.19 1.88997 13.6C2.67997 14.84 3.59997 15.91 4.59997 16.77"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.42004 18.5301C8.56004 19.0101 9.77 19.2701 11 19.2701C14.53 19.2701 17.82 17.1901 20.11 13.5901C21.01 12.1801 21.01 9.8101 20.11 8.40005C19.78 7.88005 19.42 7.39005 19.05 6.93005"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.5098 11.7C14.2498 13.11 13.0998 14.26 11.6898 14.52"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.47 13.53L1 21"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21 1L13.53 8.47"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  