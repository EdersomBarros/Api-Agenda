package io.github.EdersomBarros.agendaapi.model.repository;

import io.github.EdersomBarros.agendaapi.model.entity.Contato;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContatoRepository extends JpaRepository<Contato,Integer> {
}
