module.exports = {
  theme: {
    // Anything i but in exteend woult extend the value to existing
    // tailwind CSS . custom-blue
    extend: {
      //color would extend custom-blue to tailwind css color
      // properties that has all the default color from tailwind.
      color: {
        "custom-blue": "#345423"
      }
    }
  },
  // Variants in Tailwind refers to Hover, Focus, Responsive(sm, md, lg, xl),
  //Note by default psedo Element such as active is disable by
  //Default. to enable, see below.
  //By Default, Enable this setttings to avoid headache. Reason?
  // Variant Focus and  hover are not available on Tailwind Utility Class by default. You have to specify them
  //Eeg. hover:bg-gray-200
  //If i intend to use hover on any utility class, then i have to
  //specify it. eg. hover:text-4xl means
  //variants :  fontSize: ['responsive','hover']
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "active"],
    fontSize: ["responsive", "hover"]
  },
  plugins: []
};
