package dal;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import bo.film.Categorie;


@Repository
public interface CategorieDAO extends JpaRepository<Categorie, String> {


}
