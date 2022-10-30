package RogueBookings.repositories;

import RogueBookings.models.member.BusinessesMember;
import RogueBookings.models.member.BusinessesMemberId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

public interface BusinessesMemberRepository extends JpaRepository<BusinessesMember, BusinessesMemberId> {
    @Transactional
    @Modifying(clearAutomatically = true)
    @Query(value = "insert into businesses_members (members_id, business_id) values (:memberId, :businessId)", nativeQuery = true)
    public void addMemberToBusiness(Long memberId, Long businessId);

}