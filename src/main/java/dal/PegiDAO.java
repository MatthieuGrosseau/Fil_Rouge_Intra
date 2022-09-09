package dal;

import org.springframework.data.jpa.repository.JpaRepository;

import bo.film.Pegi;

public interface PegiDAO extends JpaRepository<Pegi, Integer> {

}
