import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
} from "mdb-react-ui-kit";

const Commint = () => {
  return (
    <MDBContainer className="mt-5 mx-10">
      <MDBRow className="flex justify-items-stretch w-full ">
        <MDBCol className="w-auto">
          <MDBCard
            className="shadow-0 border w-auto"
            style={{
              backgroundColor: "#f0f2f5",
            }}
          >
            <MDBCardBody>
              <MDBInput
                wrapperClass="mb-4"
                placeholder="Type comment..."
                label="+ Add a note"
              />

              <MDBCard className="mb-4">
                <MDBCardBody>
                  <p>Type your note, and hit enter to add it</p>

                  <div className="d-flex justify-content-between">
                    <div className="d-flex flex-row align-items-center">
                      <MDBCardImage
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(4).webp"
                        alt="avatar"
                        width="50"
                        height="50"
                      />
                      <p className="text-2xl mb-0 ms-2">Martha</p>
                    </div>
                    <div className="d-flex flex-row align-items-center">
                      <p className="small text-muted mb-0">Upvote?</p>
                      <MDBIcon
                        far
                        icon="thumbs-up mx-2 fa-xs text-black"
                        style={{ marginTop: "-0.16rem" }}
                      />
                      <p className="small text-muted mb-0">3</p>
                    </div>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Commint;
