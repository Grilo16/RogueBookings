package RogueBookings.services;

import RogueBookings.converters.DTOConverter;
import RogueBookings.dataTransferObjects.LessonDTO;
import RogueBookings.dataTransferObjects.UserDTO;
import RogueBookings.models.business.Business;
import RogueBookings.models.Lesson.Lesson;
import RogueBookings.models.user.User;
import RogueBookings.repositories.BusinessRepository;
import RogueBookings.repositories.LessonRepository;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.lang.reflect.Type;
import java.util.List;

@Service
public class LessonService {

    LessonRepository lessonRepository;
    BusinessRepository businessRepository;

    DTOConverter<LessonDTO, Lesson> dtoConverter;
    Type lessonDTOType = new TypeToken<LessonDTO>() {}.getType();
    Type lessonType = new TypeToken<Lesson>() {}.getType();

    @Autowired
    public LessonService(LessonRepository lessonRepository, BusinessRepository businessRepository, DTOConverter<LessonDTO, Lesson> dtoConverter) {
        this.lessonRepository = lessonRepository;
        this.businessRepository = businessRepository;
        this.dtoConverter = dtoConverter;
    }

    public List<LessonDTO> getAllLessons(){
        return dtoConverter.entityToDTO(lessonRepository.findAll(), lessonDTOType);
    }

    public void createNewLesson(Long businessId, Lesson lesson) {
        Business business = businessRepository.findById(businessId).get();
        lesson.setBusiness(business);
        lessonRepository.save(lesson);
    }

    public void deleteLessonById(Long lessonId) {
        lessonRepository.deleteById(lessonId);
    }
}


