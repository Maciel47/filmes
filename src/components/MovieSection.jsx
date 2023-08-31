import MoviesItem from './MoviesItem';

export default function MovieSection(props) {
    return (
        <section>
            <h2>{props.title}</h2>
            <hr className='hr'></hr>

            {props.moviesId.map((item) => (
                <MoviesItem moviesId={item} />
            ))}
        </section>
    )
}