module.exports = {
  content: [
      "./src/**/*.html",
      "./src/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        mgg1: {
          A: '#BFA3AD',
          B: '#806C73',
          C: '#FFD8E6',
          D: '#40363A',
          E: '#E6C3D0',
        },
        mgg2: {
          A: '#FFBFD7',
          B: '#FFEDBF',
          C: '#FFD8E6',
          D: '#BFFFC4',
          E: '#CCDAFF',
        },
        mgg3: {
          A: '#FFD5CC',
          B: '#E6FFBF',
          C: '#FFD8E6',
          D: '#BFFFE8',
          E: '#F5CCFF',
        },
        mgg4: {
          A: '#806C73',
          B: '#FF8CB6',
          C: '#FFD8E6',
          D: '#80465B',
          E: '#CCADB9',
        },
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
