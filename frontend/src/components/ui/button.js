const Button = ({ children, onClick }) => {
    return <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={onClick}>{children}</button>;
  };
  
  export default Button;  // ✅ Ensure default export
   