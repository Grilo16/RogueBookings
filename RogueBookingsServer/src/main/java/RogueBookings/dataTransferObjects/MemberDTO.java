package RogueBookings.dataTransferObjects;

import org.springframework.stereotype.Component;

@Component
public class MemberDTO {


    String memberName;

    public MemberDTO() {
    }

    public MemberDTO(String memberName) {
        this.memberName = memberName;
    }

    public String getMemberName() {
        return memberName;
    }

    public void setMemberName(String memberName) {
        this.memberName = memberName;
    }
}
