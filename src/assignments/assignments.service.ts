import { Injectable } from '@nestjs/common';

@Injectable()
export class AssignmentsService {
    //ניסיון
    getAllAssignments(){
        return "This is a list of all assignments";
    }
}
