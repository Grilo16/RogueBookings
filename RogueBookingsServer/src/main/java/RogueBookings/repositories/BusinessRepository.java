package RogueBookings.repositories;

import RogueBookings.models.business.Business;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BusinessRepository extends JpaRepository<Business, Long> {
}