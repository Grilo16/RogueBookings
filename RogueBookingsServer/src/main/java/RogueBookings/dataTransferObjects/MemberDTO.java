package RogueBookings.dataTransferObjects;

import RogueBookings.converters.DTOConverter;
import RogueBookings.models.member.BusinessesMember;
import RogueBookings.models.student.LessonsStudent;
import org.modelmapper.TypeToken;
import org.springframework.stereotype.Component;

import java.lang.reflect.Type;

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
