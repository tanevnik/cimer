package com.cimer.repository;

import com.cimer.domain.Post;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;
import java.util.List;

/**
 * Spring Data JPA repository for the Post entity.
 */
@SuppressWarnings("unused")
@Repository
public interface PostRepository extends JpaRepository<Post, Long> {

    @Query("select post from Post post where post.owner.login = ?#{principal.username}")
    List<Post> findByOwnerIsCurrentUser();

}
