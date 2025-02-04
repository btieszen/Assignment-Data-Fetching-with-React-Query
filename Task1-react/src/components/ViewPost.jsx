import React from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import {Card,Button,Spinner,Alert } from 'react-bootstrap';


const fetchPosts=async() => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/?_limit=10&');
    if (!response.ok){
        throw new Error("Network response was not ok");
    }
    return response.json();
};

const ViewPost = () =>{
    const { data,isLoading,isError,isSuccess,isFetching,fetchNextPage,hasNextPage}= useInfiniteQuery({
        queryKey:['post'],
        queryFn : fetchPosts,
        getNextPageParam: (allPages)=>{
            const nextPage=allPages.lenght +1;
            return nextPage <=5 ? nextPage:undefined;
        }
    });

    console.log(data)


    if (isLoading) return<Spinner animation="border" role="status"><span className="visually-hidden">Loading...</span></Spinner>
    if(isError)return<Alert variant='danger'>Error fetching data</Alert>;

        return(
            <div>
                { data.pages.map((page,index)=>(
                    <React.Fragment key={index}>
                        {page.map(post=>(
                            <Card key={post.id} className='mb-3'>
                                <Card.Body>
                               
                                    <Card.Text>Title: {post.title}</Card.Text>
                                    <Card.Text>Body: {post.body}</Card.Text>
                                </Card.Body>
                            </Card>
                        ))}
                    </React.Fragment>
                ))}
                {hasNextPage&&(
                    <div className="d-flex justify-content-center">
                    <Button variant = "primary" disabled = {isFetching} onClick={() => fetchNextPage()}>
                    {isFetching ? 'Loading...':'Load More'}
                    </Button>
                </div>
                )}
            </div>
        );
};

export default ViewPost;