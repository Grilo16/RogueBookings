package com.example.roguemageyogav3.repositories;

import com.example.roguemageyogav3.models.businessOwner.BusinessesOwner;
import com.example.roguemageyogav3.models.businessOwner.BusinessesOwnerId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

public interface BusinessesOwnerRepository extends JpaRepository<BusinessesOwner, BusinessesOwnerId> {

    @Transactional
    @Modifying(clearAutomatically = true)
    @Query(value = "insert into businesses_owners (owner_id, business_id) values (:ownerId, :businessId)", nativeQuery = true)
    public void addOwnerToBusiness(Long ownerId, Long businessId);

}