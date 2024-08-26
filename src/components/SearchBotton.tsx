const SearchButton = ({ handleChange }: { handleChange: (value: string) => void }) => {
    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        handleChange(e.target.value);
    };
    return (
        <input 
            type="text" 
            placeholder="Ingrese un nombre"
            required
            onChange={handleOnChange}
        />
    );
};

export default SearchButton;   