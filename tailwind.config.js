/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors:{
        darkColor:'#12002a'
      },
      backgroundImage:{
        'homebg': "url('/src/Images/portfolioHome.png')",
        'contactbg':"url('/src/Images/contact.PNG')"
      },
      fontFamily: {
        'sans': ['Mandali'],
      }
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}
