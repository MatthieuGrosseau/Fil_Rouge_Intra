package dal;

import org.springframework.data.jpa.repository.JpaRepository;

import bo.film.FilmVersion;

public interface FilmVersionDAO extends JpaRepository<FilmVersion, String> {

}
