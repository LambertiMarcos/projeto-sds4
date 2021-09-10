package com.devsuperior.vendasds.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.vendasds.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long> {

}
