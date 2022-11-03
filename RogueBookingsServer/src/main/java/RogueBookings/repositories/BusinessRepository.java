package RogueBookings.repositories;

import RogueBookings.models.Business;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BusinessRepository extends JpaRepository<Business, Long> {
    boolean existsByNameIgnoreCase(String name);

}