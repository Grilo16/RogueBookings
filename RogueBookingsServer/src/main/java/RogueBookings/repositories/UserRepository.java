package RogueBookings.repositories;

import RogueBookings.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.lang.NonNull;

public interface UserRepository extends JpaRepository<User, Long> {
    boolean existsByEmail(String email);

    @NonNull
    User findUserByEmail(String email);

}