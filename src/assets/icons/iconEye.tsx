export default function IconEye({
    width = 20,
    height = 20,
    color = "#404040",
    ...props
  }) {
    return (
      <svg
        width= {width}
        height={height}
        viewBox="0 0 22 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props }
      >
        <path
          d="M14.6587 9.46196C14.6587 11.4855 13.0235 13.1206 11 13.1206C8.97654 13.1206 7.34143 11.4855 7.34143 9.46196C7.34143 7.43846 8.97654 5.80334 11 5.80334C13.0235 5.80334 14.6587 7.43846 14.6587 9.46196Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11 17.9136C14.6076 17.9136 17.9699 15.7879 20.3102 12.1089C21.2299 10.6679 21.2299 8.2458 20.3102 6.80479C17.9699 3.1257 14.6076 1 11 1C7.39243 1 4.03014 3.1257 1.68983 6.80479C0.770057 8.2458 0.770057 10.6679 1.68983 12.1089C4.03014 15.7879 7.39243 17.9136 11 17.9136Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  