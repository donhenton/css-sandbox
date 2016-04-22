<?xml version="1.0" encoding="UTF-8"?>

<!--
    Document   : menuTransformer.xsl
    Created on : April 22, 2016, 8:20 AM
    Author     : dhenton
    Description:
        Purpose of transformation follows.
-->

<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method="html"/>

    <!-- TODO customize transformation rules 
         syntax recommendation http://www.w3.org/TR/xslt 
    -->
    <xsl:template match="/">
        <html>
            <head>
                <title>menuTransformer.xsl</title>
                <link href="full-css-menu.css" rel="stylesheet" type="text/css"/>
            </head>
            <body>
                
                <xsl:apply-templates />
                
            </body>
        </html>
    </xsl:template>
    
    
    <xsl:template match="menu">
        <nav class="topMenu">
            <ul class="primary-nav">
                <xsl:for-each select="*">
                    <xsl:choose>
                        <xsl:when test="name(.)='menuItem'">
                            
                            
                            <li>
                                <a>
                                    <xsl:attribute  name="href">
                                        <xsl:value-of select="@href"/>
                                    </xsl:attribute>
                                    <xsl:value-of select="."/>
                                </a>
                            </li>
                            
                            
                            
                            
                        </xsl:when>
                        <xsl:when test="name(.)='subMenu'">
                             
                            <li class="has-submenu">
                                <span class="groupMenu-placeholder">
                                    <xsl:value-of select="@text"/>
                                </span>
                                <ul>
                                    <xsl:for-each select="subMenuItem">
                                        <li> 
                                            <a>
                                                <xsl:attribute  name="href">
                                                    <xsl:value-of select="@href"/>
                                                </xsl:attribute>
                                                <xsl:value-of select="."/>
                                            </a>
                                        </li>
                                    </xsl:for-each>

                                </ul>
                            </li>
                            
                            
                        </xsl:when>
                    </xsl:choose>    
                
                
              
                
                </xsl:for-each>
          
            
            </ul>
        </nav>
    </xsl:template>
    
    
    

</xsl:stylesheet>
