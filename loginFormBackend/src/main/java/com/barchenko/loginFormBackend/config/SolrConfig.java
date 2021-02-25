package com.barchenko.loginFormBackend.config;

import org.apache.solr.client.solrj.SolrClient;
import org.apache.solr.client.solrj.impl.HttpSolrClient;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.solr.core.SolrTemplate;
import org.springframework.data.solr.repository.config.EnableSolrRepositories;

@Configuration
@EnableSolrRepositories(
        basePackages = "com.barchenko.loginFormBackend.dao")
@ComponentScan
public class SolrConfig {

    @Value("${spring.data.solr.host}")
    private String baseURL;

    @Bean
    public SolrClient solrClient() {
        return new HttpSolrClient.Builder(baseURL).build();
    }

    @Bean
    public SolrTemplate productsTemplate() {
        return new SolrTemplate(solrClient());
    }
}