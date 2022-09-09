package rest;

import java.time.LocalDate;
import java.util.List;

import javax.ws.rs.DELETE;
import javax.ws.rs.FormParam;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;

import bll.FilmBLL;
import bo.Image;
import bo.film.Categorie;
import bo.film.Etat;
import bo.film.Film;
import bo.film.FilmVersion;
import bo.film.Pegi;


@Path("/film")
public class GestionFilm {
	private FilmBLL bll;
	
	public GestionFilm() {
		bll = new FilmBLL();
	}

	@GET
	public List<Film> getFilms() {
		return bll.selectAll();
	}
	
	@GET @Path("/{id : \\d+}")
	public Film getFilm(@PathParam("id") int noFilm) {
		return bll.selectById(noFilm);
	}
	
	@POST
	public Film addFilm(
			@FormParam("nom") String nom,
			@FormParam("description") String description,
			@FormParam("dureeFilm") int dureeFilm,
			@FormParam("codePegi") int codePegi,
			@FormParam("codeVersion") String codeVersion,
			@FormParam("codeCategorie") String codeCategorie,
			@FormParam("codeEtat") String codeEtat,
			@FormParam("codeImage") int codeImage) {
		
		Pegi pegi = new Pegi();
		pegi.setCodePegi(codePegi);
		
		FilmVersion filmVersion= new FilmVersion();
		filmVersion.setCodeVersion(codeVersion);
		
		Categorie categorie = new Categorie();
		categorie.setCodeCategorie(codeCategorie);
		
		Etat etat = new Etat();
		etat.setCodeEtat(codeEtat);
		
		Image image = new Image();
		image.setCodeImage(codeImage);
		
		Film film = new Film();
		film.setNom(nom);
		film.setDescription(description);
		film.setDureeFilm(dureeFilm);
		film.setPegi(pegi);
		film.setFilmVersion(filmVersion);
		film.setCategorie(categorie);
		film.setEtat(etat);
		film.setImage(image);		
		film.setDateCrea(LocalDate.now());
		
		try {
			bll.insert(film);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return film;
	}
	
	@PUT @Path("/{id : \\d+}")
	public Film updateFilm(
		@PathParam("id") int noFilm,
		@FormParam("nom") String nom,
		@FormParam("description") String description,
		@FormParam("dureeFilm") int dureeFilm,
		@FormParam("codePegi") int codePegi,
		@FormParam("codeVersion") String codeVersion,
		@FormParam("codeCategorie") String codeCategorie,
		@FormParam("codeEtat") String codeEtat,
		@FormParam("codeImage") int codeImage) {
		
		Pegi pegi = new Pegi();
		pegi.setCodePegi(codePegi);
		
		FilmVersion filmVersion= new FilmVersion();
		filmVersion.setCodeVersion(codeVersion);
		
		Categorie categorie = new Categorie();
		categorie.setCodeCategorie(codeCategorie);
		
		Etat etat = new Etat();
		etat.setCodeEtat(codeEtat);
		
		Image image = new Image();
		image.setCodeImage(codeImage);
		
		Film film = bll.selectById(noFilm);
		film.setNom(nom);
		film.setDescription(description);
		film.setDureeFilm(dureeFilm);
		film.setPegi(pegi);
		film.setFilmVersion(filmVersion);
		film.setCategorie(categorie);
		film.setEtat(etat);
		film.setImage(image);
		film.setDateModif(LocalDate.now());
		try {
			bll.update(film);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return film;
	}
	
	
	@DELETE @Path("/{id : \\d+}")
	public Film deleteFilm(@PathParam("id") int id) {
		Film film = bll.selectById(id);
		bll.deleteById(id);
		return film;
	}
		
}
