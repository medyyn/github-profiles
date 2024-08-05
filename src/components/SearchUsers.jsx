import Container from './Container';

const SearchUsers = ({submitHandler, onChangeHandler, username}) => {
  return (
    <Container>
        <form onSubmit={submitHandler} 
            className="mt-10 justify-center gap-3 lg:gap-6 flex">
            <input
            value={username}
            onChange={onChangeHandler}
            placeholder='Enter Githup username...'
            className='border focus-visible:outline-none font-medium border-slate-400 rounded-lg py-3 px-4 md:w-1/3'
            type='text'/>
            <button type='submit' className='bg-black text-white hover:bg-black/70 active:bg-black/90 transition-all shadow-lg w-auto md:px-8 py-2 rounded-lg'>
                Submit
            </button>
        </form>
        
    </Container>
  );
};

export default SearchUsers