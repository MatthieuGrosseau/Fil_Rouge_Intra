package dal;

import java.util.List;

import bo.film.Film;

public interface FilmDAO {

	List<Film> selectAll();

	Film selectById(int noFilm);

	void insert(Film film);

	void update(Film film);

	void deleteById(int noFilm);

}
