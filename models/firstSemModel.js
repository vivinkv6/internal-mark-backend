const mongoose = require("mongoose");

const schema = mongoose.Schema;

const firstSemSchema = new schema(
  {
    name: {
      type: String,
      required: true,
    },
    register_no:{
        type:String,
        required:true
    },
    internal:{
        subject1:{
            type:String
        },
            mark:{
                assignment:{
                    type:Number
                },
                seminar:{
                    type:Number
                },
                attendence:{
                    type:Number
                },
                internalMark:{
                    type:Number
                },
                total:{
                    type:Number
                }
            }

        }
    },

  {
    timestamps: true,
  }
);



module.exports=mongoose.model('firstSemester',firstSemSchema)
