import { useState } from 'react';
import { useMutation,useQueryClient,} from '@tanstack/react-query';
import { Button,Form,Container,Row,Col,Alert } from 'react-bootstrap';


   const postPosts=async(posts)=>{
    const response = await fetch ('https://jsonplaceholder.typicode.com/posts/?_limit=10',{
        method:"POST",
        headers:{
        'Content-type':'application/json',
        },
        body:JSON.stringify(posts),
        });
        if(!response.ok){
            throw new Error("Failed to edit post");
            }
            return response.json();
   };

const EditPost=()=>{
    const queryClient= useQueryClient();
    const[showSuccessAlert,setShowSuccessAlert]=useState(false);

    const { mutate,error,isError} =useMutation({
        mutationFn:postPosts,
        onSuccess:(data)=>{
            setShowSuccessAlert(true);
            console.log ("Post updated with ID:",data.id);
            queryClient.invalidateQueries(['posts']);
            setTimeout(()=>setShowSuccessAlert(false),5000);
        },
    });


    const handleSubmit=(event)=>{
    event.preventDefault();
    const formData=new FormData(event.target);
    const posts={
        id:formData.get('id'),
        title:formData.get('title'),
        body:formData.get('body'),
    };
    mutate(posts);
    event.target.reset();
};




return(
    <div>
        {isError && <Alert variant="danger">An error occured:{error.message}</Alert>}
        {showSuccessAlert && <Alert variant ='success'> Post Updated</Alert>}


    <Container>
        <Row className = "justify-content-md-center">
            <Col md={6}>
                <h2>Update Post</h2>
                    <Form onSubmit = {handleSubmit}>

                    <Form.Group className = 'mb-3'>  
                    <Form.Label>Post ID</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder="Enter Post Id"
                    />
                    </Form.Group>

                    <Form.Group className = 'mb-3'>  
                    <Form.Label>New Post</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder="Enter Post Title"
                     
                    />
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Label>Body</Form.Label>
                        <Form.Control
                            type = 'text'
                            placeholder="Post Body"
                     
                
                            />
                        </Form.Group>
                    
                        <Button variant ="primary" type="submit">
                        Edit Post
                        </Button>
                    </Form>
                </Col>
            </Row>
            </Container>
        </div>
     
    );
};

export default EditPost;