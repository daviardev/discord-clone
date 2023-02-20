const Download = props => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='h-6 w-6 cursor-pointer'
    fill='none'
    viewBox='0 0 24 24'
    stroke='currentColor'
    strokeWidth={2}
    {...props}
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M4 16v1a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-1m-4-4-4 4m0 0-4-4m4 4V4'
    />
  </svg>
)

export default Download
